function reasonValidation() {
    var str = document.getElementById("reason_field").value.toLocaleLowerCase();
    switch (str) {
        case ("full-time"):
            document.getElementById("day").style.display = "block";
        case ("parttime"):
            document.getElementById("day").style.display = "block";
        case ("either"):
            document.getElementById("day").style.display = "block";
            break;

    }
}

function dayValidation() {
    var str = document.getElementById("day_field").value.toLocaleLowerCase();
    switch (str) {
        case ("one"):
            document.getElementById("resume").style.display = "block";
        case ("two"):
            document.getElementById("resume").style.display = "block";
        case ("three"):
            document.getElementById("resume").style.display = "block";
        case ("four"):
            document.getElementById("resume").style.display = "block";
        case ("five"):
            document.getElementById("resume").style.display = "block";
        case ("six"):
            document.getElementById("resume").style.display = "block";
        case ("seven"):
            document.getElementById("resume").style.display = "block";
            break;

    }
}

function resumeValidation() {
    var str = document.getElementById("resume_field").value.toLocaleLowerCase();
    switch (str) {
        case ("january"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("february"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("march"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("april"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("may"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("june"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("july"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("august"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("september"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("october"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("november"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";
        case ("december"):
            document.getElementById("time").style.display = "none";
            document.getElementById("time").style.display = "block";

            break;

    }
}

function timeValidation() {
    var str = document.getElementById("time_field").value.toLocaleLowerCase();
    switch (str) {
        case ("one-month"):
            document.getElementById("salary").style.display = "none";
            document.getElementById("salary").style.display = "block";
        case ("three-months"):
            document.getElementById("salary").style.display = "none";
            document.getElementById("salary").style.display = "block";
        case ("six-months"):
            document.getElementById("salary").style.display = "none";
            document.getElementById("salary").style.display = "block";
        case ("one-year"):
            document.getElementById("salary").style.display = "none";
            document.getElementById("salary").style.display = "block";

            break;
    }
}

function salaryValidation() {
    var str = document.getElementById("salary_field").value.toLocaleLowerCase();
    switch (str) {
        case ("above"):
            document.getElementById("eligible").style.display = "none";
            document.getElementById("eligible").style.display = "block";
        case ("below"):
            document.getElementById("eligible").style.display = "none";
            document.getElementById("eligible").style.display = "block";
            break;

    }
}

function eligibleValidation() {
    var str = document.getElementById("eligible_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("relocate").style.display = "none";
            document.getElementById("relocate").style.display = "block";
        case ("no"):
            document.getElementById("relocate").style.display = "none";
            document.getElementById("relocate").style.display = "block";
            break;

    }
}

function relocateValidation() {
    var str = document.getElementById("relocate_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("remote").style.display = "none";
            document.getElementById("remote").style.display = "block";
        case ("no"):
            document.getElementById("remote").style.display = "none";
            document.getElementById("remote").style.display = "block";
            break;
    }
}

function remoteValidation() {
    var str = document.getElementById("remote_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("travel").style.display = "none";
            document.getElementById("travel").style.display = "block";
        case ("no"):
            document.getElementById("travel").style.display = "none";
            document.getElementById("travel").style.display = "block";
            break;
    }
}

function travelValidation() {
    var str = document.getElementById("travel_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("medical").style.display = "none";
            document.getElementById("medical").style.display = "block";
        case ("no"):
            document.getElementById("medical").style.display = "none";
            document.getElementById("medical").style.display = "block";
            break;
    }
}

function medicalValidation() {
    var str = document.getElementById("medical_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("background").style.display = "none";
            document.getElementById("background").style.display = "block";
        case ("no"):
            document.getElementById("background").style.display = "none";
            document.getElementById("background").style.display = "block";
            break;
    }
}

function backgroundValidation() {
    var str = document.getElementById("background_field").value.toLocaleLowerCase();
    switch (str) {
        case ("yes"):
            document.getElementById("travel").style.display = "none";
            document.getElementById("travel").style.display = "block";
        case ("no"):
            document.getElementById("travel").style.display = "none";
            document.getElementById("travel").style.display = "block";
            break;
    }
    End();
}

function End() {
    document.getElementById("info").innerHTML = "<br><br> Thank you for filling out this form";
    document.getElementById("info").style.display = "block";
}