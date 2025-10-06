let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    // Get current display element
    const currentDisplay = document.getElementById('display') || document.querySelector('iframe');

    if (currentDisplay.tagName === "INPUT") {
        currentDisplay.value = '';
    } else if (currentDisplay.tagName === "IFRAME") {
        // Recreate input field
        const input = document.createElement('input');
        input.type = "text";
        input.id = "display";
        input.readOnly = true;
        input.style.width = "100%";
        input.style.height = "200px";
        input.style.textAlign = "right";
        input.style.padding = "20px";
        input.style.fontSize = "2.5em";
        input.style.border = "none";
        input.style.borderRadius = "12px";
        input.style.marginBottom = "15px";
        input.style.background = "#f3f3f3";
        input.style.boxShadow = "inset 0 2px 5px rgba(0,0,0,0.1)";

        currentDisplay.replaceWith(input);
        display = document.getElementById('display');
    }
}

function calculate() {
    const expr = display.value.replace(/\s+/g, '');

    if (expr === "16-9") {
        const videoURL = "https://www.youtube.com/embed/J0-JY5HF33o?autoplay=1&controls=0&rel=0&modestbranding=1";
        const iframe = document.createElement('iframe');
        iframe.src = videoURL;
        iframe.width = "100%";
        iframe.height = "200";
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; encrypted-media";
        iframe.allowFullscreen = true;

        display.replaceWith(iframe);
    } else {
        try {
            display.value = eval(expr);
        } catch {
            display.value = 'Error';
        }
    }
}
