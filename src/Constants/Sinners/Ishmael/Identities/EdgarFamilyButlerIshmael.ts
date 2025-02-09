import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const EdgarFamilyButlerIshmaelDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Heal 5 SP (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/EvadeUT4.png'
}

const EdgarFamilyButlerIshmaelSkill1: Skill = {
    Name: "Sweeping Redirection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Crit] Gain 1 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/SweepingRedirection.png'
}

const EdgarFamilyButlerIshmaelSkill2: Skill = {
    Name: "Housekeeping",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[Clash Win] Gain 2 Poise"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn<br>"+
            "[On Crit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/Housekeeping.png'
}

const EdgarFamilyButlerIshmaelSkill3: Skill = {
    Name: "Restraining Technique",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain 6 [Poise]"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 [Slash Fragility] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/RestrainingTechnique.png'
}

export const EdgarFamilyButlerIshmael: Identity = {
    Id: 10809,
    Name: "Edgar Family Butler",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyButlerIshmaelSkill1, 
            EdgarFamilyButlerIshmaelSkill2, 
            EdgarFamilyButlerIshmaelSkill3, 
            EdgarFamilyButlerIshmaelDefense],
    Passives: [
        new Passive("Deep Cleaning",
            PassiveTypeEnum.Combat,
            "If this unit Critically Hits against targets with Slower Speed than this unit's, inflict 1 additional Potency for negative effects with its Skills (3 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Loyal Supporter",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed attacks a target with [Sinking], deal +1% more damage for every 1 [Sinking] on target (max 20%)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksunginfo.png'
}