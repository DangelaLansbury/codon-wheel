// Sequence of nucleotides
let nucleotide1 = '';
let nucleotide2 = '';
let nucleotide3 = '';

// Amino acid produced
let aminoAcid = '';

// Amino Acid to nucleotide mapping
const aminoAcidMap = {
  valine: ['GUC', 'GUA', 'GUG', 'GUU'],
  leucine: ['CUC', 'CUA', 'CUG', 'CUU', 'UUA', 'UUG'],
  isoleucine: ['AUC', 'AUA', 'AUU'],
  methionine: ['AUG'],
  phenylalanine: ['UUC', 'UUA'],
  tyrosine: ['UAC', 'UAU'],
  cysteine: ['UGC', 'UGU'],
  tryptophan: ['UGG'],
  proline: ['CCC', 'CCA', 'CCG', 'CCU'],
  histidine: ['CAC', 'CAU'],
  glutamine: ['CAA', 'CAG'],
  arginine: ['CGC', 'CGA', 'CGG', 'CGU', 'AGA', 'AGG'],
  serine: ['AGC', 'AGU', 'UCC', 'UCA', 'UCG', 'UCU'],
  glycine: ['GGC', 'GGA', 'GGG', 'GGU'],
  alanine: ['GCC', 'GCA', 'GCG', 'GCU'],
  asparticAcid: ['GAC', 'GAU'],
  glutamicAcid: ['GAA', 'GAG'],
  asparagine: ['AAC', 'AAU'],
  lysine: ['AAA', 'AAG'],
  threonine: ['ACC', 'ACA', 'ACG', 'ACU'],
  serine: ['AGC', 'AGU', 'UCC', 'UCA', 'UCG', 'UCU'],
  stop: ['UAA', 'UAG', 'UGA'],
};

// Handle selections
$('input[type=radio]').click(function () {
  // Identify which nucleotide was selected and update sequence
  if ($(this).prop('name') === 'options1') {
    nucleotide1 = $(this).prop('id');
  }
  if ($(this).prop('name') === 'options2') {
    nucleotide2 = $(this).prop('id');
  }
  if ($(this).prop('name') === 'options3') {
    nucleotide3 = $(this).prop('id');
  }

  // Check if sequence is complete and generate Amino Acid
  produceAmino();
});

// Refresh codon wheel
$('.reset').click(function () {
  // Uncheck radio buttons
  $('.btn-check').each(function () {
    $('input[type="radio"]').prop('checked', false);
  });
  // Reset sequence
  nucleotide1 = '';
  nucleotide2 = '';
  nucleotide3 = '';
  aminoAcid = '';

  $('h1').css('visibility', 'hidden');
  $('h1').html('placeholder');
  $('.reset').css('visibility', 'hidden');
});

function produceAmino() {
  if (nucleotide1 != '' && nucleotide2 != '' && nucleotide3 != '') {
    if (nucleotide1 === 'optionA1') {
      if (nucleotide2 === 'optionA2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'Lysine';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Asparagine';
        }
      }
      if (nucleotide2 === 'optionG2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'Arginine';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Serine';
        }
      }
      if (nucleotide2 === 'optionC2') {
        aminoAcid = 'Threonine';
      }
      if (nucleotide2 === 'optionU2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionC3' || nucleotide3 === 'optionU3') {
          aminoAcid = 'Isoleucine';
        }
        if (nucleotide3 === 'optionG3') {
          aminoAcid = 'Methionine';
        }
      }
    }

    if (nucleotide1 === 'optionG1') {
      if (nucleotide2 === 'optionA2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'Glutamic Acid';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Aspartic Acid';
        }
      }
      if (nucleotide2 === 'optionG2') {
        aminoAcid = 'Glycine';
      }
      if (nucleotide2 === 'optionC2') {
        aminoAcid = 'Alanine';
      }
      if (nucleotide2 === 'optionU2') {
        aminoAcid = 'Valine';
      }
    }

    if (nucleotide1 === 'optionC1') {
      if (nucleotide2 === 'optionA2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'Glutamine';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Histidine';
        }
      }
      if (nucleotide2 === 'optionG2') {
        aminoAcid = 'Arginine';
      }
      if (nucleotide2 === 'optionC2') {
        aminoAcid = 'Proline';
      }
      if (nucleotide2 === 'optionU2') {
        aminoAcid = 'Leucine';
      }
    }

    if (nucleotide1 === 'optionU1') {
      if (nucleotide2 === 'optionA2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'STOP';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Tyrosine';
        }
      }
      if (nucleotide2 === 'optionG2') {
        if (nucleotide3 === 'optionA3') {
          aminoAcid = 'STOP';
        }
        if (nucleotide3 === 'optionG3') {
          aminoAcid = 'Tryptophan';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Cysteine';
        }
      }
      if (nucleotide2 === 'optionC2') {
        aminoAcid = 'Serine';
      }
      if (nucleotide2 === 'optionU2') {
        if (nucleotide3 === 'optionA3' || nucleotide3 === 'optionG3') {
          aminoAcid = 'Leucine';
        }
        if (nucleotide3 === 'optionU3' || nucleotide3 === 'optionC3') {
          aminoAcid = 'Phenylalanine';
        }
      }
    }

    visualizeAmino();
  }
}

function visualizeAmino() {
  $('h1').html(aminoAcid);
  $('h1').css('visibility', 'visible');
  $('.reset').css('visibility', 'visible');
}
