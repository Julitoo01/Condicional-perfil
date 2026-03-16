import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">

      ${cover}

      <img src="${variables.avatarURL}" class="photo" />

      <h1>${variables.name || "Name"} ${variables.lastName || "LastName"}</h1>

      <h2>${variables.role || "Role"}</h2>

      <h3>
        ${variables.city || "City"}
        ${variables.country ? "Country" + variables.country : "Country"}
      </h3>

      <ul class="${variables.socialMediaPosition}">

        ${
          variables.twitter
            ? `<li>
                <a href="https://twitter.com/${variables.twitter}">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>`
            : ""
        }

        ${
          variables.github
            ? `<li>
                <a href="https://github.com/${variables.github}">
                  <i class="fab fa-github"></i>
                </a>
              </li>`
            : ""
        }

        ${
          variables.linkedin
            ? `<li>
                <a href="https://linkedin.com/in/${variables.linkedin}">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>`
            : ""
        }

        ${
          variables.instagram
            ? `<li>
                <a href="https://instagram.com/${variables.instagram}">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>`
            : ""
        }

      </ul>

    </div>
  `;
}

/**
 * Don't change any of the lines below
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background:
      "https://media.istockphoto.com/id/147486873/es/foto/de-hombre-calvo.jpg?s=612x612&w=0&k=20&c=3wYblBxql9sEUk0DTQZHdwNyf5dWsLDctbKWOinDBKA=",
    avatarURL:
      "https://hips.hearstapps.com/hmg-prod/images/bald-head-royalty-free-image-1599469569.jpg?crop=0.668xw:1.00xh;0.157xw,0&resize=640:*",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};

      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;

      render(Object.assign(window.variables, values));
    });
  });
};
