import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheMiddleLittleSisterDonQuixoteSkill2 implements Skill {
    readonly Name: string = "Proof of Loyalty";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Damage Down]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/ProofOfLoyalty.png";
}