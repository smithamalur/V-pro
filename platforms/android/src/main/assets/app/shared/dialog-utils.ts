import * as dialogsModule from "ui/dialogs";

export function alert(message: string) {
  return dialogsModule.alert({
    title: "Vessel Pro",
    okButtonText: "OK",
    message: message
  });
}