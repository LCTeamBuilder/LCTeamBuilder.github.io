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

const ArdorBlossomStarIshmaelAwakening: Skill = {
    Name: "Ardor Blossom Star",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +22,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[Heads Hit] Raise Stagger Threshold by 40% of damage dealt<br>"+
            "[On Hit] Inflict [Burn] by Wrath Reson.<br>"+
            "[Heads Attack End] Inflict 5 [Burn] on 3 random enemies", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803awakenprofile.png"
}

const ArdorBlossomStarIshmaelCorrosion: Skill = {
    Name: "Ardor Blossom Star",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 41,
    Coins: 1,
    CoinValue: -22,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[On Use] Lose HP by 10% of Max HP"),
        new SkillDescriptionPart("[After Attack] Inflict [Burn] by (2 * Wrath Reson.) on all units<br>"+
            "[On Hit] Raise Stagger Threshold by 60% of damage dealt")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803erosionprofile.png"
}

export const ArdorBlossomStarIshmael: Ego = {
    Id: 20803,
    Name: "Ardor Blossom Star",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ArdorBlossomStarIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ArdorBlossomStarIshmaelCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Shower of Fire", PassiveTypeEnum.Ego, "On hit, if the target had [Burn], inflict 1 [Burn] on 3 random enemies."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 4 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803cg.png"
}