const form = document.querySelector('form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const captchaResponse = grecaptcha.getResponse();

                      if (!captchaResponse.length > 0) {
                        throw new Error("Captcha not complete")
                      }

                      const fd = new FormData(e.target);
                      const params = new URLSearchParams(fd);
  
                      fetch('https://api.web3forms.com/submit', {
                        method: "POST",
                        body: params,
                      }) 
                      .then(res => res.json())
                      .then(data => {
                          if (data.captchaSuccess) {
                            console.log("Validation Successful")
                          }
                          else {
                            console.log("Validation Failed")
                          }
                      .catch(err => console.error(err))
});
