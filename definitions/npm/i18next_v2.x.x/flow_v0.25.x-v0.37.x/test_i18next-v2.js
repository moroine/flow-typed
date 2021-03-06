import i18n from "i18next";

i18n.init({});
i18n.init({
  debug: true,
  preload: true
});
// $FlowExpectedError lng needs to be string
i18n.init({ lng: ["en"] });

// $FlowExpectedError Need options for init
i18n.use("Some Module").init();
i18n.use("Some Module").init({});

// $FlowExpectedError
const A: boolean = i18n.t("foo");
const B: string = i18n.t("bar");

i18n.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        key: "hello world"
      }
    }
  }
});

i18n.init({
  lng: "en",
  // $FlowExpectedError should be string keyed object
  resources: [false, {}]
});
