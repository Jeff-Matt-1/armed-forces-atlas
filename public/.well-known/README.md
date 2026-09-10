# Digital Asset Links

`assetlinks.json` is deliberately an empty array. It is valid, it is honest —
no Android app is linked to this domain yet — and it means the file already
exists at the URL Android will ask for, so publishing later is one edit rather
than a deployment question.

When the app is published as a Trusted Web Activity, replace the array with one
entry carrying the release signing certificate's SHA-256 fingerprint, taken from
Play Console (Setup → App integrity → App signing key certificate):

    [
      {
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "<the app id>",
          "sha256_cert_fingerprints": ["<fingerprint from Play Console>"]
        }
      }
    ]

Do not guess the fingerprint. A wrong one does not fail loudly — the app simply
opens with a browser address bar over it, which is the one thing the Trusted Web
Activity exists to avoid.
