import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePrincessOfLaManchalandRodionDefense: Skill = {
    Name: "Don Quixote Hardblood Arts 15: Parasol",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[On Use] Reduce [Bleed] Count by 3 for 2 other allies with the highest ([Bleed] Potency x Count) value, and increase [Bloodfeast] by (pre-reduction [Bleed] Potency x Count reduced)<br>"+
            "- If this effect reduced [Bleed] Count to 0, [Bleed] expires<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, reduce their [Bleed] Count by 2 more<br>"+
            "[Clash Win] Gain 4 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/DonQuixoteHardbloodArts15Parasol.png"
}