import React from "react";

function Footer(props) {
  return (
    <div>
      <div class='p-5'>&nbsp;</div>
      <div class='footer fixed-bottom py-4 bg-dark text-light'>
        <div class='container text-center'>
          <small>
            &copy;
            <script type='text/javascript'>
              document.write(new Date().getFullYear());
            </script>
            UofT SCS Coding Bootcamp
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
