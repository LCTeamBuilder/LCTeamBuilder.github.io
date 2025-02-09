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

const ForestForTheFlamesRyoshuAwakening: Skill = {
    Name: "Forest for the Flames",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 6 [Burn]<br>"+
            "[On Hit] Inflict 1 [Fragile] next turn<br>"+
            "[Heads Hit] Inflict 1 [Fragile] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/ForestForTheFlames/20401awakenprofile.png'
}

export const ForestForTheFlamesRyoshu: Ego = {
    Id: 20401,
    Name: "Forest for the Flames",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ForestForTheFlamesRyoshuAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Art", PassiveTypeEnum.Ego, "Deal and take +5% damage for each enemy this unit defeated last turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/ForestForTheFlames/20401cg.png'
}