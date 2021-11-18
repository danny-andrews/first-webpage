$(function () {
  $("ul.tabset li").click(function () {
    $("ul.tabset li").css("background", "none");
    $("div.tab").hide();
    $(this).css("background", "#708598");
    var link = $(this).children("a")[0];
    var divId = $(link).attr("href").replace("#", "");
    $("div#" + divId).show();
  });

  $(".tabs").tabs();
});

function validateForm() {
  var isFormValid = true;

  var firstName = document.user_data.first_name.value;
  if (firstName === null || firstName === "") {
    updateErrorMessage("first_name_error", "First name is required.");
    isFormValid = false;
  }

  var lastName = document.user_data.last_name.value;
  if (lastName === null || lastName === "") {
    updateErrorMessage("last_name_error", "Last name is required.");
    isFormValid = false;
  }

  var emailAddress = document.user_data.email_address.value;
  var emailRegex = /^[a-zA-Z0-9_%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/;
  if (emailAddress === null || emailAddress === "") {
    updateErrorMessage("email_address_error", "E-mail address is required.");
    isFormValid = false;
  } else if (emailRegex.test(emailAddress) === false) {
    updateErrorMessage(
      "email_address_error",
      "Please enter a valid e-mail address."
    );
    isFormValid = false;
  }

  var phoneNumber = document.user_data.phone_number.value;
  phoneNumber = phoneNumber.replace(/\D/g, "");
  if (phoneNumber === null || phoneNumber === "") {
    updateErrorMessage("phone_number_error", "Phone number is required.");
    isFormValid = false;
  } else if (phoneNumber.length !== 10) {
    updateErrorMessage(
      "phone_number_error",
      "Please enter a valid phone number."
    );
    isFormValid = false;
  }

  if (!isFormValid) {
    var sprite = document.getElementById("sprite");
    sprite.style.visibility = "visible";
    var newLeft = 0;
    function wowYao() {
      newLeft = newLeft + 20;
      sprite.style.left = newLeft + "px";
      if (newLeft == 940) {
        clearInterval(id);
      }
    }

    var id = setInterval(wowYao, 6);
  }

  return isFormValid;
}

function updateForm() {
  var isFormValid = true;
  var firstName = document.user_data.first_name.value;
  if (firstName !== null && firstName !== "") {
    updateErrorMessage("first_name_error", "");
  } else {
    isFormValid = false;
    updateErrorMessage("first_name_error", "First name is required.");
  }

  var lastName = document.user_data.last_name.value;
  if (lastName !== null && lastName !== "") {
    updateErrorMessage("last_name_error", "");
  } else {
    isFormValid = false;
    updateErrorMessage("last_name_error", "Last name is required.");
  }

  var emailRegex = /^[a-zA-Z0-9_%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/;
  var emailAddress = document.user_data.email_address.value;
  if (emailAddress !== null && emailAddress !== "") {
    if (emailRegex.test(emailAddress) === true) {
      updateErrorMessage("email_address_error", "");
    } else {
      isFormValid = false;
      updateErrorMessage(
        "email_address_error",
        "Please enter a valid e-mail address."
      );
    }
  } else {
    isFormValid = false;
    updateErrorMessage("email_address_error", "E-mail address is required.");
  }

  var phoneNumber = document.user_data.phone_number.value;
  phoneNumber = phoneNumber.replace(/\D/g, "");
  if (phoneNumber !== null && phoneNumber !== "") {
    if (phoneNumber.length === 10) {
      updateErrorMessage("phone_number_error", "");
    } else {
      isFormValid = false;
      updateErrorMessage(
        "phone_number_error",
        "Please enter a valid phone number."
      );
    }
  } else {
    isFormValid = false;
    updateErrorMessage("phone_number_error", "Phone number is required.");
  }

  if (isFormValid === true) {
    document.getElementById("sprite").style.visibility = "hidden";
  }
}

function updateErrorMessage(errorTextId, message) {
  document.getElementById(errorTextId).innerHTML = message;
  if (message === null || message === "") {
    document.getElementById(errorTextId).style.opacity = 0;
  } else {
    document.getElementById(errorTextId).style.opacity = 1;
  }
}

function expandMenu() {
  var listItems = document
    .getElementById("selected_nav_item")
    .getElementsByTagName("ul");
  listItems[0].style.display = "block";
}

function collapseMenu() {
  var listItems = document
    .getElementById("selected_nav_item")
    .getElementsByTagName("ul");
  listItems[0].style.display = "none";
}

function scrollUp() {
  var scrollArea = document.getElementById("scroll_area");
  scrollArea.scrollTop = scrollArea.scrollTop - 20;
}

function scrollDown() {
  var scrollArea = document.getElementById("scroll_area");
  scrollArea.scrollTop = scrollArea.scrollTop + 20;
}

function getAjaxed() {
  var request = createRequest();
  if (request) {
    request.open("GET", "judah/~gallaghd/ymm/ymmdb.php?fmt=xml", true);
    request.onreadystatechange = ajaxResponseHandler(request);
    request.send(null);
  }
}

function createRequest() {
  var request;
  try {
    request = new XMLHttpRequest();
  } catch (e) {
    request = false;
  }

  return request;
}

function ajaxResponseHandler(request) {
  if (request.readyState == 4) {
    var response = request.responseXML;
  }
}
