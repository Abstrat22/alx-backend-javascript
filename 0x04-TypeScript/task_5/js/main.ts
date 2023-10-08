/* eslint-disable @typescript-eslint/no-unused-vars */
interface MajorCredits {
    credits: number;
    brand: "MajorCredits"; // Unique brand for MajorCredits
  }
  
interface MinorCredits {
    credits: number;
    brand: "MinorCredits"; // Unique brand for MinorCredits
  }

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits",
    };
  }
  
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits",
    };
  }
  