onmessage = async function () {
    const response = await fetch('http://localhost:5000/api/feedback');
    const feedbacks = await response.json();
    postMessage(feedbacks);
};
