// Complete starter database mapping all 25 natures
const pokemonDatabase = [
    // Fighting / Physical / Dragon
    { name: "Mankey", nature: "Rash", classTag: "A", habitatTag: "A" },
    { name: "Machop", nature: "Hardy", classTag: "A", habitatTag: "A" },
    { name: "Riolu", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Bagon", nature: "Adamant", classTag: "A", habitatTag: "A" },
    { name: "Gible", nature: "Naughty", classTag: "A", habitatTag: "D" },
    { name: "Axew", nature: "Brave", classTag: "A", habitatTag: "A" },
    { name: "Goomy", nature: "Docile", classTag: "D", habitatTag: "A" },
    { name: "Dreepy", nature: "Timid", classTag: "C", habitatTag: "D" },
    { name: "Cyclizar", nature: "Jolly", classTag: "C", habitatTag: "B" },
    { name: "Frigibax", nature: "Hardy", classTag: "A", habitatTag: "A" },
    { name: "Cubone", nature: "Careful", classTag: "A", habitatTag: "A" },
    { name: "Chimchar", nature: "Impish", classTag: "A", habitatTag: "A" },
    { name: "Phanpy", nature: "Lax", classTag: "A", habitatTag: "A" },
    { name: "Meowth-Galarian", nature: "Bashful", classTag: "A", habitatTag: "B" },

    // Starters / Fire / Grass / Water
    { name: "Charmander", nature: "Docile", classTag: "A", habitatTag: "A" },
    { name: "Cyndaquil", nature: "Timid", classTag: "B", habitatTag: "A" },
    { name: "Torchic", nature: "Hardy", classTag: "B", habitatTag: "A" },
    { name: "Bulbasaur", nature: "Calm", classTag: "D", habitatTag: "A" },
    { name: "Treecko", nature: "Quiet", classTag: "C", habitatTag: "A" },
    { name: "Squirtle", nature: "Bold", classTag: "D", habitatTag: "C" },
    { name: "Totodile", nature: "Jolly", classTag: "A", habitatTag: "C" },
    { name: "Mudkip", nature: "Rash", classTag: "D", habitatTag: "C" },
    { name: "Chikorita", nature: "Gentle", classTag: "D", habitatTag: "A" },
    { name: "Turtwig", nature: "Bold", classTag: "D", habitatTag: "A" },

    // Electric / Normal / Utility / Psychic
    { name: "Pikachu", nature: "Hasty", classTag: "B", habitatTag: "B" },
    { name: "Eevee", nature: "Naive", classTag: "B", habitatTag: "B" },
    { name: "Shinx", nature: "Hasty", classTag: "A", habitatTag: "B" },
    { name: "Piplup", nature: "Quirky", classTag: "C", habitatTag: "C" },
    { name: "Rattata", nature: "Sassy", classTag: "B", habitatTag: "B" },
    { name: "Psyduck", nature: "Relaxed", classTag: "C", habitatTag: "C" },
    { name: "Meowth", nature: "Lonely", classTag: "B", habitatTag: "B" },
    { name: "Abra", nature: "Modest", classTag: "C", habitatTag: "B" },
    { name: "Gastly", nature: "Mild", classTag: "C", habitatTag: "B" },
    { name: "Porygon", nature: "Serious", classTag: "C", habitatTag: "B" },
    { name: "Aipom", nature: "Meticulous", classTag: "B", habitatTag: "A" }
];

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
    q15: { A: {}, B: {}, C: {}, D: {} }
};

function submitQuiz() {
    const name = document.getElementById("player-name").value;
    if (!name) {
        alert("Please enter your name first!");
        return;
    }

    let natureScores = {};
    let formElement = document.getElementById("icebreaker-form");
    let formData = new FormData(formElement);

    // Calculate Nature Scores from Questions 1 to 14
    for (let i = 1; i <= 14; i++) {
        let answer = formData.get(`q${i}`);
        if (!answer) {
            alert(`Please answer Question ${i}!`);
            return;
        }
        let scores = answerScores[`q${i}`][answer];
        if (scores) {
            for (let nature in scores) {
                natureScores[nature] = (natureScores[nature] || 0) + scores[nature];
            }
        }
    }
    let q15ClassTag = formData.get("q15");
    if (!q15ClassTag) {
        alert("Please answer Question 15!");
        return;
    }
    // Determine highest scoring Nature
    let highestScore = -1;
    let winningNature = "Hardy"; // Default base if scores tie at 0
    for (let nature in natureScores) {
        if (natureScores[nature] > highestScore) {
            highestScore = natureScores[nature];
            winningNature = nature;
        }
    }

    // Filter candidate Pokémon based on Nature
    let candidates = pokemonDatabase.filter(p => p.nature === winningNature);
    let finalPokemon;

    if (candidates.length > 0) {
        // Try matching Question 15 Role preference
        let classMatches = candidates.filter(p => p.classTag === q15ClassTag);
        finalPokemon = classMatches.length > 0 ? classMatches[0] : candidates[0];
    } else {
        // Safety shield fallback if a nature is unmapped
        finalPokemon = pokemonDatabase[0] || { name: "Eevee", nature: winningNature };
    }

    // PASTE YOUR WEBHOOK LINK BETWEEN THE QUOTES BELOW:
    const webhookUrl = "https://discord.com/api/webhooks/1549032761501814835/U5HpO45TbdUdd0h6nHQXt3yjmG4uMOMBaKvN6Ct0olmuJz_iywfaMYkedAn0vsPzyuta";

    // Post silently to Discord
    if (webhookUrl && webhookUrl !== "https://discord.com/api/webhooks/1549032761501814835/U5HpO45TbdUdd0h6nHQXt3yjmG4uMOMBaKvN6Ct0olmuJz_iywfaMYkedAn0vsPzyuta") {
        fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `🎲 **New Icebreaker Submission!**\n**Player:** ${name}\n**Nature:** ${winningNature}\n**Assigned Pokémon:** ${finalPokemon.name}`
            })
        }).catch(err => console.log(err));
    }

    // Switch screen view
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    window.scrollTo(0, 0);
}