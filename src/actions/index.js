export default function playKey(key) {
  return {
    type: "PLAY_KEY",
    payload: key
  };
}
