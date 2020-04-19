import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { TextField, Button } from "@material-ui/core";

import useContactStyles from "../styles/contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import config from "../config.json";

function ContactForm() {
  const { t } = useTranslation();

  const style = useContactStyles();

  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formMsg, setFormMsg] = useState("");

  async function sendMessage() {
    try {
      await axios.post(config.contact, {
        formName,
        formMail,
        formMsg,
      });
      setFormName("");
      setFormMail("");
      setFormMsg("");
      console.log("Sucesso");
    } catch (err) {
      console.log("Erro");
    }
  }

  return (
    <>
      <TextField
        variant="outlined"
        label={t("contact:your_name")}
        className={style.input}
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
      />
      <TextField
        variant="outlined"
        label={t("contact:your_contact")}
        className={style.input}
        value={formMail}
        onChange={(e) => setFormMail(e.target.value)}
      />
      <TextField
        variant="outlined"
        multiline={true}
        rows={8}
        label={t("contact:message")}
        className={style.input}
        value={formMsg}
        onChange={(e) => setFormMsg(e.target.value)}
      />
      <Button
        size="large"
        variant="contained"
        startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
        onClick={sendMessage}
      >
        {t("contact:send")}
      </Button>
    </>
  );
}

export default ContactForm;
