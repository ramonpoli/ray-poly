import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";

export const sendGoogleEvent = (event: string, eventValue?: string) => {
  sendGTMEvent({ event: event, value: eventValue });
  sendGAEvent('event', event, { value: eventValue });
}