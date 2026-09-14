// Master database array of species mapped to Primary Nature & Secondary Tags
// Add your remaining base evolution lines to this array as needed!
const pokemonDatabase = [
    // Fighting Types
    { name: "Mankey", nature: "Rash", classTag: "A", habitatTag: "A" },
    { name: "Machop", nature: "Hardy", classTag: "A", habitatTag: "A" },
    { name: "Tauros (Paldea - Combat)", nature: "Adamant", classTag: "A", habitatTag: "B" },
    { name: "Tyrogue", nature: "Adamant", classTag: "A", habitatTag: "D" },
    { name: "Makuhita", nature: "Hardy", classTag: "A", habitatTag: "A" },
    { name: "Meditite", nature: "Quiet", classTag: "C", habitatTag: "A" },
    { name: "Riolu", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Timburr", nature: "Hardy", classTag: "D", habitatTag: "A" },
    { name: "Throh", nature: "Serious", classTag: "A", habitatTag: "A" },
    { name: "Sawk", nature: "Serious", classTag: "A", habitatTag: "A" },
    { name: "Mienfoo", nature: "Careful", classTag: "C", habitatTag: "A" },
    { name: "Pancham", nature: "Naughty", classTag: "A", habitatTag: "A" },
    { name: "Hawlucha", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Crabrawler", nature: "Bold", classTag: "A", habitatTag: "C" },
    { name: "Passimian", nature: "Adamant", classTag: "B", habitatTag: "A" },
    { name: "Sneasel (Hisui)", nature: "Jolly", classTag: "C", habitatTag: "A" },
    { name: "Clobbopus", nature: "Impish", classTag: "A", habitatTag: "C" },
    { name: "Falinks", nature: "Serious", classTag: "A", habitatTag: "D" },

    // Ice Types
    { name: "Sandshrew (Alola)", nature: "Adamant", classTag: "A", habitatTag: "A" },
    { name: "Vulpix (Alola)", nature: "Timid", classTag: "D", habitatTag: "A" },
    { name: "Swinub", nature: "Naive", classTag: "C", habitatTag: "A" },
    { name: "Delibird", nature: "Jolly", classTag: "B", habitatTag: "A" },
    { name: "Smoochum", nature: "Sassy", classTag: "B", habitatTag: "B" },
    { name: "Snorunt", nature: "Quirky", classTag: "C", habitatTag: "D" },
    { name: "Spheal", nature: "Jolly", classTag: "B", habitatTag: "C" },
    { name: "Darumaka (Galar)", nature: "Rash", classTag: "A", habitatTag: "A" },
    { name: "Vanillite", nature: "Docile", classTag: "D", habitatTag: "A" },
    { name: "Cubchoo", nature: "Timid", classTag: "B", habitatTag: "D" },
    { name: "Cryogonal", nature: "Serious", classTag: "D", habitatTag: "A" },
    { name: "Bergmite", nature: "Hardy", classTag: "A", habitatTag: "D" },
    { name: "Snom", nature: "Timid", classTag: "D", habitatTag: "A" },
    { name: "Eiscue", nature: "Relaxed", classTag: "A", habitatTag: "C" },
    { name: "Cetoddle", nature: "Gentle", classTag: "A", habitatTag: "A" },

    // Dragon Types
    { name: "Dratini", nature: "Gentle", classTag: "D", habitatTag: "C" },
    { name: "Bagon", nature: "Adamant", classTag: "A", habitatTag: "A" },
    { name: "Gible", nature: "Naughty", classTag: "A", habitatTag: "D" },
    { name: "Axew", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Druddigon", nature: "Impish", classTag: "A", habitatTag: "A" },
    { name: "Goomy", nature: "Docile", classTag: "D", habitatTag: "A" },
    { name: "Jangmo-o", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Dreepy", nature: "Timid", classTag: "C", habitatTag: "D" },
    { name: "Cyclizar", nature: "Jolly", classTag: "C", habitatTag: "B" },
    { name: "Tatsugiri", nature: "Impish", classTag: "B", habitatTag: "C" },
    { name: "Frigibax", nature: "Hardy", classTag: "A", habitatTag: "A" }
];

// Point Map for 15 Questions
const answerScores = {
    q1: { A: { Brave: 2, Rash: 1 }, B: { Careful: 2, Serious: 1 }, C: { Quiet: 2, Timid: 1 }, D: { Jolly: 2, Gentle: 1 } },
    q2: { A: { Adamant: 2, Impish: 1 }, B: { Meticulous: 2, Modest: 1 }, C: { Timid: 2, Bashful: 1 }, D: { Quirky: 2, Lonely: 1 } },
    q3: { A: { Jolly: 2, Naive: 1 }, B: { Sassy: 2, Lax: 1 }, C: { Hardy: 2, Bold: 1 }, D: { Careful: 2, Docile: 1 } },
    q4: { A: { Bold: 2, Brave: 1 }, B: { Naive: 2, Impish: 1 }, C: { Quiet: 2, Careful: 1 }, D: { Bashful: 2, Relaxed: 1 } },
    q5: { A: { Hasty: 2, Rash: 1 }, B: { Gentle: 2, Docile: 1 }, C: { Impish: 2, Quirky: 1 }, D: { Relaxed: 2, Lax: 1 } },
    q6: { A: { Serious: 2, Hardy: 1 }, B: { Rash: 2, Naughty: 1 }, C: { Relaxed: 2, Lax: 1 }, D: { Lonely: 2, Gentle: 1 } },
    q7: { A: { Jolly: 2, Sassy: 1 }, B: { Careful: 2, Quiet: 1 }, C: { Lax: 2, Relaxed: 1 }, D: { Meticulous: 2, Modest: 1 } },
    q8: { A: { Adamant: 2, Bold: 1 }, B: { Naive: 2, Jolly: 1 }, C: { Impish: 2, Naughty: 1 }, D: { Gentle: 2, Docile: 1 } },
    q9: { A: { Bold: 2, Hasty: 1 }, B: { Careful: 2, Serious: 1 }, C: { Naive: 2, Rash: 1 }, D: { Quiet: 2, Calm: 1 } },
    q10: { A: { Serious: 2, Brave: 1 }, B: { Gentle: 2, Calm: 1 }, C: { Timid: 2, Lonely: 1 }, D: { Sassy: 2, Impish: 1 } },
    q11: { A: { Calm: 2, Gentle: 1 }, B: { Jolly: 2, Sassy: 1 }, C: { Relaxed: 2, Lax: 1 }, D: { Meticulous: 2, Quiet: 1 } },
    q12: { A: { Gentle: 2, Docile: 1 }, B: { Serious: 2, Careful: 1 }, C: { Bold: 2, Hasty: 1 }, D: { Timid: 2, Bashful: 1 } },
    q13: { A: { Hasty: 2, Rash: 1 }, B: { Impish: 2, Naughty: 1 }, C: { Relaxed: 2, Lax: 1 }, D: { Serious: 2, Careful: 1 } },
    q14: { A: { Bold: 2, Jolly: 1 }, B: { Lax: 2, Naive: 1 }, C: { Quiet: 2, Bashful: 1 }, D: { Timid: 2, Careful: 1 } },
    q15: { A: {}, B: {}, C: {}, D: {} } // Used strictly for D&D Class / Stat Focus tie-breaker
};

function submitQuiz() {
    const playerNameInput = document.getElementById("player-name").value;
    if (!playerNameInput) {
        alert("Please enter your name before submitting!");
        return;
    }

    // Initialize scores tally
    let natureScores = {};

    // Collect answers
    let formElement = document.getElementById("icebreaker-form");
    let formData = new FormData(formElement);

    for (let i = 1; i <= 14; i++) {
        let answer = formData.get(`q${i}`);
        if (!answer) {
            alert(`Please answer question ${i}!`);
            return;
        }

        let scores = answerScores[`q${i}`][answer];
        for (let nature in scores) {
            natureScores[nature] = (natureScores[nature] || 0) + scores[nature];
        }
    }

    // Read tie-breaker answers
    let q11HabitatTag = formData.get("q11");
    let q15ClassTag = formData.get("q15");

    if (!q15ClassTag) {
        alert("Please answer Question 15!");
        return;
    }

    // 1. Determine top nature
    let highestScore = -1;
    let winningNature = "";

    for (let nature in natureScores) {
        if (natureScores[nature] > highestScore) {
            highestScore = natureScores[nature];
            winningNature = nature;
        }
    }

    // 2. Filter species pool by winning nature
    let candidates = pokemonDatabase.filter(p => p.nature === winningNature);

    // 3. Handle filtering / tie-breaking
    let finalPokemon = null;

    if (candidates.length === 1) {
        finalPokemon = candidates[0];
    } else if (candidates.length > 1) {
        // Try matching Class Tag first
        let classMatches = candidates.filter(p => p.classTag === q15ClassTag);
        if (classMatches.length === 1) {
            finalPokemon = classMatches[0];
        } else if (classMatches.length > 1) {
            // Try matching Habitat Tag second
            let habitatMatches = classMatches.filter(p => p.habitatTag === q11HabitatTag);
            finalPokemon = habitatMatches[0] || classMatches[0];
        } else {
            // Fallback to Habitat match if Class tag didn't narrow it down
            let habitatMatches = candidates.filter(p => p.habitatTag === q11HabitatTag);
            finalPokemon = habitatMatches[0] || candidates[0];
        }
    } else {
        // Fallback safety if nature isn't in test list yet
        finalPokemon = { name: "Eevee (Default)", nature: winningNature };
    }

    // 4. Send secret payload to DM via Discord Webhook
    // REPLACE THIS STRING WITH YOUR PRIVATE DISCORD WEBHOOK URL!
    const webhookUrl = "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEhttps://discord.com/api/webhooks/1549032761501814835/U5HpO45TbdUdd0h6nHQXt3yjmG4uMOMBaKvN6Ct0olmuJz_iywfaMYkedAn0vsPzyutaN";

    const payload = {
        content: `🎮 **New Campaign Icebreaker Submitted!**\n` +
                 `**Player Name:** ${playerNameInput}\n` +
                 `**Winning Nature:** ${winningNature}\n` +
                 `**Assigned Pokémon:** ${finalPokemon.name}\n` +
                 `**Road Trip Choice (Class Focus):** Option ${q15ClassTag}`
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch(err => console.log("Silent error posting webhook:", err));

    // 5. Hide quiz, show success message to player
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    window.scrollTo(0, 0);
}