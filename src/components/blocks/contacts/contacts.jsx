import React from "react";
import LogoContacts from "../../ui/logo-contacts/logo-contacts";
import H1 from "../../ui/elements/h1.jsx";
import { CreateContacts, ContactsItem } from "./styles.js";

export default function Contacts() {
  return (
    <CreateContacts id="contacts">
      <H1>Контакты</H1>
      <ContactsItem href="mailto:ankryl93@gmail.com">
        ankryl93@gmail.com
      </ContactsItem>
      <ContactsItem href="tel:+79166961885">+7(916)696-18-85</ContactsItem>
      <LogoContacts />
    </CreateContacts>
  );
}
