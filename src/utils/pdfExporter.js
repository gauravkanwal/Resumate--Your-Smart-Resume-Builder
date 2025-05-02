import html2canvas from "html2canvas";

export const exportPDF = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  // Temporarily scale down the element for rendering
  const originalStyle = element.style.cssText;
  element.style.width = "595px"; // Limit width to A4 size
  element.style.height = "842px"; // Limit height to A4 size
  element.style.overflow = "hidden"; // Prevent overflow issues
  element.style.transform = "scale(1)"; // Ensure no scaling issues
  element.style.transformOrigin = "top left"; // Set transform origin

  try {
    // Generate the canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Increase resolution
      useCORS: true, // Handle cross-origin resources
      logging: true, // Enable logging for debugging
      backgroundColor: "#ffffff", // Set a solid background color
    });

    // Convert canvas to image and trigger download
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "Resume.png";
    link.click();
  } catch (error) {
    console.error("Error generating PDF:", error);
  } finally {
    // Restore the original styles
    element.style.cssText = originalStyle;
  }
};