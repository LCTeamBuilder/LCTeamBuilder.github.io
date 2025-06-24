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

const HeishouPackSiBranchGregorDefense: Skill = {
    Name: "Reversal Kick",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("Clashable Guard<br>" +
            "[Combat Start] Gain 3 [Serpent Arm] next turn<br>" +
            "[On Use] At 10+ [Poise] Count, Coin Power +1"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/HeishouPackSiBranch/ReversalKickUT4.png'
}

const HeishouPackSiBranchGregorSkill1: Skill = {
    Name: "Snake Fang",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 10 (sum of this unit's [Poise] Potency and target's [Rupture] Potency) (max 2)<br>" +
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Crit] If this unit has [Serpent Arm], inflict +1 [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/HeishouPackSiBranch/SnakeFang.png'
}

const HeishouPackSiBranchGregorSkill2: Skill = {
    Name: "Blindsiding Cleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Crit] If this unit has [Serpent Arm], inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>" +
            "[On Hit] At 30+ [Poise], consume 10 [Poise] on self to Reuse Coin once (1 time max)<br>" +
            "[On Hit] Inflict [Deathrite - Venom]<br>" +
            "[On Crit] Gain 1 [Serpent Arm]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/HeishouPackSiBranch/BlindsidingCleave.png'
}

const HeishouPackSiBranchGregorSkill3: Skill = {
    Name: "Serpentshear Puncturing Arm",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 8 (sum of this unit's [Poise] Potency and target's [Rupture] Potency) (max 4)<br>" +
            "- If this unit has [Serpent Arm], Coin Power +1 for every 5 (sum of this unit's [Poise] Potency and target's [Rupture] Potency) instead (max 6)<br>" +
            "[On Use] Gain 3 [Serpent Arm]<br>" +
            "[Clash Win] If target has 5+ [Rupture], gain 5 [Poise]"),
        new SkillDescriptionPart("Deal +10% damage for every ([Poise] Potency on self + [Rupture] Potency on target) (max 200%)<br>" +
            "If this unit has [Serpent Arm], deal +100% Damage on Critical Hit<br>" +
            "[On Hit] Reduce [Deathrite - Venom] on target by 2<br>" +
            "[On Crit] Reduce [Deathrite - Venom] on target by 3<br>" +
            "[On Crit] Inflict +2 [Rupture] Count<br>" +
            "[On Hit] Inflict [Deathrite - Venom]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/HeishouPackSiBranch/SerpentshearPuncturingArm.png'
}

export const HeishouPackSiBranchGregor: Identity = {
    Id: 11212,
    Name: "Heishou Pack - Si Branch",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +0,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [HeishouPackSiBranchGregorSkill1, 
            HeishouPackSiBranchGregorSkill2, 
            HeishouPackSiBranchGregorSkill3, 
            HeishouPackSiBranchGregorDefense],
    Passives: [
        new Passive("Heishou Mutation [Si]",
            PassiveTypeEnum.Combat,
            "If target has [Deathrite - Venom], deal +5% damage for every [Serpent Arm] on self (max 15%)<br>" +
            "If this unit reduced the target's [Deathrite - Venom] down to 0 Stack, gain 1 [Pierce DMG Up] next turn (max 2)",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned),

        new Passive("Like a Serpent: Flexible, Elastic, and Unpredictable",
            PassiveTypeEnum.Support,
            "If this unit is killed in this Encounter: every turn, at Combat Start, apply 2 [Poise] to the Substituting Identity of the earliest Deployment order.",
            [{ sin: SinEnum.Gluttony, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/HeishouPackSiBranch/11212gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/HeishouPackSiBranch/11212gacksunginfo.png'
}