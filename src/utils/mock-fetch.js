const timedPromise = (n) => new Promise((r) => setTimeout(r, n));

const sample = {
  "1": {
    otp: "20160313versASE3135rXmbb8xbJ6gcXasc2CrHtlGo2eECtBaynfVpTxQfnaEjA",
    playbackInfo:
      "eyJ2aWRlb0lkIjoiMTA0MWVkNThjZDU0NGY5YmE2MGEzYWE1ZGEzZjExZWYifQ=="
  },
  "2": {
    otp: "20160313versASE313eOHJzAceVcea4K0rqlVBWcYfgbL04Vm7bNPe59vUe411IH",
    playbackInfo:
      "eyJ2aWRlb0lkIjoiMTA0MWVkNThjZDU0NGY5YmE2MGEzYWE1ZGEzZjExZWYifQ=="
  }
};

/**
 * mock fetch function
 * //TODO
 * In a production environment, this fetch will make a HTTP
 * call to your backend server along with the logged-in user
 * authentication token or cookie. The server will verify
 * that the logged in user has access to the requested video
 * and then generate OTP and playbackInfo using the API
 */
export const mockFetch = (id) =>
  Promise.resolve()
    .then(() => timedPromise(Math.random() * 1000))
    .then(() => sample[id]);
