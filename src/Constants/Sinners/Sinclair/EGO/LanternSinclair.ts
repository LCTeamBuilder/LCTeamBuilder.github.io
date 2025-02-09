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

const LanternSinclairAwakening: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 50%- HP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 Rupture [On Hit] Heal 2 allies with the lowest HP by 15% of Max HP.", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/Lantern/21004awakenprofile.png'
}

const LanternSinclairCorrosion: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with the most HP<br>"+
            "[Before Attack] At 50%- HP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Heal self by 50% of damage dealt")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/Lantern/21004erosionprofile.png'
}

export const LanternSinclair: Ego = {
    Id: 21004,
    Name: "Lantern",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: LanternSinclairAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: LanternSinclairCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Fairy Lure", PassiveTypeEnum.Ego, "After defeating an enemy that mainly targets this unit at the start of the combat phase, heal 3% of Max HP + (Gluttony A-Reson.)% of Max HP"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/Lantern/21004cg.png'
}