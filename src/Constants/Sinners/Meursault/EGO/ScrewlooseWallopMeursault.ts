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

const ScrewlooseWallopMeursaultAwakening: Skill = {
    Name: "Screwloose Wallop",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 23,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Gain 3 [Protection]<br>"+
            "[After Attack] Gain 1 [Surgery] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502awakenprofile.png"
}

const ScrewlooseWallopMeursaultCorrosion: Skill = {
    Name: "Screwloose Wallop",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Gain 2 [Surgery] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]<br>"+
            "Raise Stagger Threshold by 30% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502erosionprofile.png"
}

export const ScrewlooseWallopMeursault: Ego = {
    Id: 20502,
    Name: "Screwloose Wallop",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ScrewlooseWallopMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ScrewlooseWallopMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Final Augment", PassiveTypeEnum.Ego, "If the E.G.O Skill is used at less than 25% HP, gain 3 [Attack Power Up], [Defense Power Up], and [Haste] every turn, but then die in 3 turns."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502cg.png"
}