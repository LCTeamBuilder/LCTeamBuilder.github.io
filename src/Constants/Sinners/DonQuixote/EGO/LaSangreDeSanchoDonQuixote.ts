import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const LaSangreDeSanchoDonQuixoteAwakening: Skill = {
    Name: "La Sangre de Sancho",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 8 [Bleed]<br>"+
            "[On Hit] Heal by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301awakenprofile.png"
}

export const LaSangreDeSanchoDonQuixote: Ego = {
    Id: 20301,
    Name: "La Sangre de Sancho",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LaSangreDeSanchoDonQuixoteAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Immoderate Passion", PassiveTypeEnum.Ego, "On hit, if the target had [Bleed], heal 3 HP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301cg.png"
}