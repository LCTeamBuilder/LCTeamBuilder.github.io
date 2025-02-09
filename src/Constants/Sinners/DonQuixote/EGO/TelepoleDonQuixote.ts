import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const TelepoleDonQuixoteAwakening: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain +10 [Charge] Count<br>"+
            "[After Attack] Give [Charge] Count to all ", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/Telepole/20303awakenprofile.png'
}

const TelepoleDonQuixoteCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain +10 [Charge] Count snd 10 [Rupture]<br>"+
            "[After Attack] Give 5 [Fragile], 10 [Rupture], and +12 [Charge] Count to all allies")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/Telepole/20303erosionprofile.png'
}

export const TelepoleDonQuixote: Ego = {
    Id: 20303,
    Name: "Telepole",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Haphazard Discharge", PassiveTypeEnum.Ego, "At the start of the combat phase, a random ally with [Charge] gains +(Envy A-Reson. / 2) [Charge] Count."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/Telepole/20303cg.png'
}