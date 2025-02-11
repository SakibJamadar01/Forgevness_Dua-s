// List of Duas with the following fields:
// - title
// - arabic (Original Arabic text)
// - translation_en (English translation)
// - translation_hi_urdu (Urdu-Hindi translation, colloquial)
// - transliteration_en (Latin-script transliteration of Arabic)
// - transliteration_hi (Devanagari-script transliteration of Arabic)
// - reference
// (Audio has been removed.)
const duas = [
    {
      title: "Dua of Adam (AS)",
      arabic:
        "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ",
      translation_en:
        "Our Lord! We have wronged ourselves, and if You do not forgive us and have mercy on us, we will surely be among the losers.",
      translation_hi_urdu:
        "ऐ हमारे मालिक! हमने अपने ऊपर जुल्म किया है, अगर तू हमें माफ़ नहीं करेगा और रहमत नहीं करेगा, तो हम नुकसान उठाने वालों में से होंगे।",
      transliteration_en:
        "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal khasireen",
      transliteration_hi:
        "रब्बना ज़लमना अनफ़ुसना वा इन लम तग़फिर लना वा तरहमा लनकूनन्न मिन अल ख़ासिरीन",
      reference: "Surah Al-A'raf (7:23)"
    },
    {
      title: "Dua of Yunus (AS)",
      arabic:
        "لَّآ إِلَـٰهَ إِلَّآ أَنتَ سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
      translation_en:
        "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      translation_hi_urdu:
        "तेरे सिवा कोई माबूद नहीं! तू पाक है, बेशक मैं ही जालिमों में से था।",
      transliteration_en:
        "La ilaha illa anta subhanaka inni kuntu minal zalimeen",
      transliteration_hi:
        "ला इलाहा इल्ला अंता सुब्हानका इन्नी कुंतु मिन अल ज़ालिमीन",
      reference: "Surah Al-Anbiya (21:87)"
    },
    {
      title: "Sayyidul Istighfar (Best Dua for Forgiveness)",
      arabic:
        "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      translation_en:
        "O Allah, You are my Lord, there is no deity except You, You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me, and I confess my sins. So forgive me, for none can forgive sins except You.",
      translation_hi_urdu:
        "ऐ हमारे मालिक! तू ही मेरा रब है, तुझ बिन कोई इबादत योग्य नहीं, तूने मुझे बनाया और मैं तेरा बंदा हूँ, और जितनी हो सके तेरे वादे का पालन करता हूँ। मैं अपनी की हुई हर बुराई से तेरी शरण में आता हूँ। तेरी देन का इकरार करता हूँ और अपने गुनाहों को स्वीकार करता हूँ। मुझे माफ़ कर दे, क्योंकि गुनाह माफ़ करने वाला सिर्फ तू ही है।",
      transliteration_en:
        "Allahumma anta rabbi, la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika ma istata'tu, a'udhu bika min sharri ma sana'tu, abuu'u laka bini'matika 'alayya, wa abuu'u bidhambi, faghfir li, fa innahu la yaghfiru ad-dhunuba illa anta",
      transliteration_hi:
        "अल्लाहुम्मा अंता रब्बी, ला इलाहा इल्ला अंता, खलक्तानि वा अना 'अब्दुक, वा अना 'अला 'अहदिका वा वअदिका मा इस्ततअ'तु, अ'उधु बिक मिन شر्री मा सना'तु, अबू'उ लका बिन'इमतिका 'अलय्या, वा अबू'उ बिधम्बि, फग़फिर ली, फा इनहु ला यगफ़िरु अद-धुनूबा इल्ला अंता",
      reference: "Sahih Al-Bukhari 6306"
    },
    {
      title: "Short Istighfar",
      arabic:
        "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
      translation_en:
        "I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him.",
      translation_hi_urdu:
        "मैं अल्लाह से माफी चाहता हूँ, जिसके सिवा कोई इबादत योग्य नहीं, जो हमेशा जीवित और पालनहार है, और मैं उसकी ओर अपनी तौबा करता हूँ।",
      transliteration_en:
        "Astaghfirullah alladhi la ilaha illa huwa al-hayyu al-qayyum wa atubu ilayh",
      transliteration_hi:
        "अस्तग़फ़िरुल्लाह अल्लाज़ी ला इलाहा इल्ला हुवा अल-हय्यु अल-कय्यूम वा अतूबु इलैह",
      reference: "Sunan Abu Dawood 1517"
    },
    {
      title: "Dua of Ibrahim (AS)",
      arabic:
        "رَبَّنَا ٱغْفِرْ لِي وَلِوَٰلِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
      translation_en:
        "Our Lord! Forgive me, my parents, and the believers on the Day when the reckoning will be established.",
      translation_hi_urdu:
        "ऐ हमारे मालिक! मेरे, मेरे माता-पिता और सभी मुमिनों को माफ़ कर दे उस दिन, जब हिसाब होगा।",
      transliteration_en:
        "Rabbana ighfir li wa liwalidayya walilmu'mineena yawma yaquumu al-hisab",
      transliteration_hi:
        "रब्बना इघफिर ली वा लिवालिदय्या वा लिलमु'मिनीन यौमा याकूमु अल-हिसाब",
      reference: "Surah Ibrahim (14:41)"
    },
    {
      title: "Dua for Repentance",
      arabic:
        "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ",
      translation_en:
        "O Allah! Forgive all my sins, the minor and the major, the first and the last, the manifest and the hidden.",
      translation_hi_urdu:
        "ऐ हमारे मालिक! मेरे सारे गुनाह माफ़ कर दे, छोटे और बड़े, पहले और आखिरी, ज़ाहिर और छुपे हुए।",
      transliteration_en:
        "Allahumma ighfir li dhanbi kullahu, diqquhu wa jilhu, wa awwalahu wa akhirahu, wa 'alaniyatahu wa sirruhu",
      transliteration_hi:
        "अल्लाहुम्मा इघफ़िर ली धनबी कुल्लहु, दीक्खहु वा जिल्हु, वा अव्वलहु वा आखिरहु, वा अलानियतहु वा सिर्रहु",
      reference: "Sahih Muslim 483"
    },
    {
      title: "Dua for Forgiveness and Mercy",
      arabic:
        "رَبِّ ٱغْفِرْ لِى وَتُبْ عَلَىَّ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ",
      translation_en:
        "My Lord! Forgive me and have mercy on me, for You are the Oft-Repeating Forgiver, Most Merciful.",
      translation_hi_urdu:
        "ऐ मेरे मालिक! मुझे माफ़ कर दे और मुझ पर दया कर, क्योंकि तू ही बार-बार माफ़ करने वाला है, सबसे दयालु।",
      transliteration_en:
        "Rabbi ighfir li wa tub 'alayya innaka anta at-tawwabur rahim",
      transliteration_hi:
        "रब्बि इघफिर ली वा तब् 'अलय्या इन्नका अंता अत-तव्वाबुर रहिम",
      reference: "Sunan Abu Dawood"
    },
    {
      title: "Dua for Seeking Forgiveness after Prayer",
      arabic:
        "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ",
      translation_en:
        "I seek forgiveness from Allah, I seek forgiveness from Allah, I seek forgiveness from Allah.",
      translation_hi_urdu:
        "मैं अल्लाह से माफी चाहता हूँ, मैं अल्लाह से माफी चाहता हूँ, मैं अल्लाह से माफी चाहता हूँ।",
      transliteration_en:
        "Astaghfirullah, astaghfirullah, astaghfirullah",
      transliteration_hi:
        "अस्तग़फ़िरुल्लाह, अस्तग़फ़िरुल्लाह, अस्तग़फ़िरुल्लाह",
      reference: "Sahih Muslim 1355"
    }
  ];
  
  // Generate and display Dua cards on the main page
  function generateDuaCards() {
    const container = document.getElementById("dua-container");
    container.innerHTML = ""; // Clear any previous content
  
    duas.forEach((dua, index) => {
      const card = document.createElement("div");
      card.className = "dua-card";
      card.id = `card-${index}`;
      // Each card shows the title and Arabic text along with a "Learn More" button.
      card.innerHTML = `
        <h3>${dua.title}</h3>
        <p class="arabic">${dua.arabic}</p>
        <button onclick="toggleDetails(${index})" id="toggle-${index}">Learn More</button>
        <div class="details" id="details-${index}">
          <p class="translation"><strong>English:</strong> ${dua.translation_en}</p>
          <p class="translation"><strong>Urdu-Hindi:</strong> ${dua.translation_hi_urdu}</p>
          <p class="transliteration"><strong>Transliteration (English):</strong> ${dua.transliteration_en}</p>
          <p class="transliteration"><strong>Transliteration (Hindi):</strong> ${dua.transliteration_hi}</p>
          <p class="reference"><strong>Reference:</strong> ${dua.reference}</p>
          <button onclick="downloadDua(${index})" class="download">📥 Download as JPG</button>
          <button onclick="shareDua(${index})" class="share">📤 Share</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Toggle the details (translations, transliterations, and buttons) on a card
  function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    const toggleButton = document.getElementById(`toggle-${index}`);
    if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
      detailsDiv.style.display = "block";
      toggleButton.innerText = "Hide Details";
    } else {
      detailsDiv.style.display = "none";
      toggleButton.innerText = "Learn More";
    }
  }
  
  // Download the specified card as a JPG image using html2canvas
  function downloadDua(index) {
    const card = document.getElementById(`card-${index}`);
    html2canvas(card).then(function(canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg');
      link.download = `${duas[index].title}.jpg`;
      link.click();
    });
  }
  
  // Share the Dua text for the specified card using the Web Share API (if supported)
  // The shared text includes all details plus a website link.
  function shareDua(index) {
    const dua = duas[index];
    // Remove the website link if you don't have one
    const shareText = 
      "Title: " + dua.title + "\n\n" +
      "Arabic: " + dua.arabic + "\n\n" +
      "English: " + dua.translation_en + "\n\n" +
      "Urdu-Hindi: " + dua.translation_hi_urdu + "\n\n" +
      "Transliteration (English): " + dua.transliteration_en + "\n\n" +
      "Transliteration (Hindi): " + dua.transliteration_hi + "\n\n" +
      "Reference: " + dua.reference;
      
    if (navigator.share) {
      navigator.share({
        title: dua.title,
        text: shareText
      })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  }
  
  
  // Filter Duas based on the search input text
  function searchDuas() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".dua-card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(searchText)
        ? "block"
        : "none";
    });
  }
  
  // Load Duas when the page loads
  window.onload = generateDuaCards;
  