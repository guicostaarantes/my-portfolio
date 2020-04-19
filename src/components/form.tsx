import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Recaptcha from "react-google-recaptcha";

import useContactFormStyles from "../styles/contactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import config from "../config.json";

function ContactForm() {
  const { t } = useTranslation();

  const style = useContactFormStyles();

  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [recaptchaRef, setRecaptchaRef] = useState<Recaptcha | null>(null);

  async function sendMessage() {
    try {
      await axios.post(config.contact, {
        formName,
        formMail,
        formMsg,
        recaptcha,
      });
      setFormName("");
      setFormMail("");
      setFormMsg("");
    } catch (err) {}
    recaptchaRef?.reset();
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
      <div className={style.recaptcha}>
        <Recaptcha
          type="image"
          sitekey={config.recaptcha_v2_key}
          ref={(e) => setRecaptchaRef(e)}
          onChange={(e) => (e !== null ? setRecaptcha(e) : false)}
          onExpired={() => setRecaptcha("")}
          onErrored={() => setRecaptcha("")}
        />
      </div>
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
