import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePrincessOfLaManchalandRodionDefense implements Skill {
    readonly Name: string = "Don Quixote Hardblood Arts 15: Parasol";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[On Use] Reduce [Bleed] Count by 3 for 2 other allies with the highest ([Bleed] Potency x Count) value, and increase [Bloodfeast] by (pre-reduction [Bleed] Potency x Count reduced)<br>"+
            "- If this effect reduced [Bleed] Count to 0, [Bleed] expires<br>"+
            "- If the affected ally is a &lt;Bloodfiend&gt;, reduce their [Bleed] Count by 2 more<br>"+
            "[Clash Win] Gain 4 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.UniqueCounter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/DonQuixoteHardbloodArts15Parasol.png";
}