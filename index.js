const images = [
  "low-stock-limitedBatchAvailable.png",
  "LymphaticDrainage.png",
  "ItStopWorking_Product2ND.png",
  "WhyThiShappendAfter35_Product2ND.png",
  "AllConnectedToTheSameRootCause_Product3RD.png",
  "WhyNothingHasWorkedUntilNow_Product3RD.png",
  "Risk-FreeFor60Days_Product3RD.png",
  "AddressessAll8Mechanism.png",
  "WhatToExpectWeekByWeek.png",
  "93000Women.png",
  "1000sOfScientsPapers.png",
  "QualityYouCanTrust.png",
  "WhoSayItWorks.png",
];

const productFeatures = [
  {
    image: "1st.png",
    caption: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    image: "2nd.png",
    caption: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    image: "3rd.png",
    caption:
      "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    image: "4th.png",
    caption:
      "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    image: "5th.png",
    caption:
      "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    image: "6th.png",
    caption: "Boosts energy, mental clarity and emotional balance",
  },
];

$(document).ready(function () {
  const featuresContainer = $(".product-features");

  productFeatures.forEach((feature) => {
    const featureItem = $(`
      <div class="feature-item">
        <div>
          <img src="./assets/images/features/${feature.image}" alt="${feature.caption}" />
        </div>
        <div>
          <p style="font-size: 16px;">${feature.caption}</p>
        </div>
      </div>`);

    featuresContainer.append(featureItem);
  });
});
