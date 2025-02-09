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

const WishingCairnDonQuixoteAwakening: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict +4 [Bleed] Count<br>"+
            "[On Hit] Inflict 5 [Tremor]<br>"+
            "[Heads Hit] Inflict 2 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/WishingCairn/20305awakenprofile.png'
}

const WishingCairnDonQuixoteCorrosion: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Crit] Trigger [Tremor Burst]<br>"+
            "[On Crit] Inflict 8 [Bleed]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 2", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/WishingCairn/20305erosionprofile.png'
}

export const WishingCairnDonQuixote: Ego = {
    Id: 20305,
    Name: "Wishing Cairn",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: WishingCairnDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: WishingCairnDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Fallen Stone Pagoda", PassiveTypeEnum.Ego, "Gain 2 [Poise] and +2 [Poise] Count when defeating an enemy with [Bleed] (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/WishingCairn/20305cg.png'
}