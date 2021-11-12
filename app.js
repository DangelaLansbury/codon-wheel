// Sequence of nucleotides
var nucleotide1 = "";
var nucleotide2 = "";
var nucleotide3 = "";

// Amino acid produced
var aminoAcid = "";

// Handle selections
$("input[type=radio]").click(function() {

  // Identify which nucleotide was selected and update sequence
  if ($(this).prop("name") === "options1") {
    nucleotide1 = $(this).prop("id");
  } if ($(this).prop("name") === "options2") {
    nucleotide2 = $(this).prop("id");
  } if ($(this).prop("name") === "options3") {
    nucleotide3 = $(this).prop("id");
  }

  // Check if sequence is complete and generate Amino Acid
  produceAmino();

})

// Refresh codon wheel
$(".reset").click(function() {

  // Uncheck radio buttons
  $(".btn-check").each(function() {
    $('input[type="radio"]').prop('checked', false);
  })
  // Reset sequence
  nucleotide1 = "";
  nucleotide2 = "";
  nucleotide3 = "";
  aminoAcid = "";

  $("h1").css("visibility", "hidden");
  $("h1").html("placeholder");
  $(".reset").css("visibility", "hidden");

});

function produceAmino() {

  if (nucleotide1 != "" && nucleotide2 != "" && nucleotide3 != "") {

    if (nucleotide1 === "optionA1") {
      if (nucleotide2 === "optionA2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "Lysine";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Asparagine"
        }
      }
      if (nucleotide2 === "optionG2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "Arginine";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Serine";
        }
      }
      if (nucleotide2 === "optionC2") {
        aminoAcid = "Threonine";
      }
      if (nucleotide2 === "optionU2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionC3" || nucleotide3 === "optionU3") {
          aminoAcid = "Isoleucine";
        }
        if (nucleotide3 === "optionG3") {
          aminoAcid = "Methionine";
        }
      }
    }

    if (nucleotide1 === "optionG1") {
      if (nucleotide2 === "optionA2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "Glutamic Acid";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Aspartic Acid";
        }
      }
      if (nucleotide2 === "optionG2") {
        aminoAcid = "Glycine";
      }
      if (nucleotide2 === "optionC2") {
        aminoAcid = "Alanine";
      }
      if (nucleotide2 === "optionU2") {
        aminoAcid = "Valine";
      }
    }

    if (nucleotide1 === "optionC1") {
      if (nucleotide2 === "optionA2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "Glutamine";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Histidine";
        }
      }
      if (nucleotide2 === "optionG2") {
        aminoAcid = "Arginine";
      }
      if (nucleotide2 === "optionC2") {
        aminoAcid = "Proline";
      }
      if (nucleotide2 === "optionU2") {
        aminoAcid = "Leucine";
      }
    }

    if (nucleotide1 === "optionU1") {
      if (nucleotide2 === "optionA2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "STOP";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Tyrosine";
        }
      }
      if (nucleotide2 === "optionG2") {
        if (nucleotide3 === "optionA3") {
          aminoAcid = "STOP";
        }
        if (nucleotide3 === "optionG3") {
          aminoAcid = "Tryptophan";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Cysteine";
        }
      }
      if (nucleotide2 === "optionC2") {
        aminoAcid = "Serine";
      }
      if (nucleotide2 === "optionU2") {
        if (nucleotide3 === "optionA3" || nucleotide3 === "optionG3") {
          aminoAcid = "Leucine";
        }
        if (nucleotide3 === "optionU3" || nucleotide3 === "optionC3") {
          aminoAcid = "Phenylalanine";
        }
      }
    }

    console.log("Your amino acid is " + aminoAcid);
    visualizeAmino();

  }

}

function visualizeAmino() {
  $("h1").html(aminoAcid);
  $("h1").css("visibility", "visible");
  $(".reset").css("visibility", "visible");
}






// $("input[type=radio][name=options1]").click(function() {
//   nucleotide1 = $(this).attr("id");
// });
//
// $("input[type=radio][name=options2]").click(function() {
//   nucleotide2 = $(this).attr("id");
// });
//
// $("input[type=radio][name=options3]").click(function() {
//   nucleotide3 = $(this).attr("id");
// });



// $(".btn").click(function() {
//
//   alert("A button has been clicked!");
//
// })



// $(".btn-primary").click(function() {
//
//   alert(nucleotide1 + " , " + nucleotide2 + " , " + nucleotide3);
//
// })



// const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");
// const request = require("request");
//
// const app = express();
//
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));



// app.get("/", function(req, res) {
//
//   res.sendFile(__dirname + "/index.html");
//
// });



// app.post("/", function(req, res) {
//
//   // var firstNucleotide = req.body.optionA1;
//
//   function testAlert() {
//     if ($(".codon-wheel")."#nucSelector-1"."#optionA1".isSelected()) {
//       alert("The first nucleotide is Adenine");
//     } else {
//       alert("The first nucleotide is not Adenine");
//     }
//   }
//
//   testAlert();
//
//   // $(".btn-primary").
//   //   if(optionA1.isSelected()){
//   //   alert("Adenine");
//   // }
//
// });



// app.listen(3000, function() {
//
//   console.log("Server is running on port 3000.");
//
// });
