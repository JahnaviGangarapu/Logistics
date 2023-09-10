document.addEventListener("DOMContentLoaded", function () {
  const trackButton = document.getElementById("trackButton");
  const trackingCodeInput = document.getElementById("trackingCodeInput");
  const trackingResult = document.getElementById("trackingResult");

  // Event listener for the track button
  trackButton.addEventListener("click", function () {
      const trackingCode = trackingCodeInput.value;
      
      // Simulate tracking by displaying a sample result (replace with actual tracking logic)
      const sampleResult = {
          trackingCode: trackingCode,
          status: "In Transit",
          location: "New York, NY",
          estimatedDelivery: "September 21, 2023"
      };

      displayTrackingResult(sampleResult);
  });

  // Function to display the tracking result
  function displayTrackingResult(result) {
      trackingResult.innerHTML = `
          <h3>Tracking Code: ${result.trackingCode}</h3>
          <p>Status: ${result.status}</p>
          <p>Location: ${result.location}</p>
          <p>Estimated Delivery: ${result.estimatedDelivery}</p>
      `;
  }
});
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}