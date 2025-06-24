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

const HeishouPackSiBranchRodionDefense: Skill = {
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
        [new SkillDescriptionPart("[Clashable Guard]<br>" +
            "[Combat Start] Gain 3 [Serpent Arm] next turn<br>" +
            "[On Use] At 10+ [Poise] Count, Coin Power +1"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/HeishouPackSiBranch/ReversalKickUT4.png'
}

const HeishouPackSiBranchRodionSkill1: Skill = {
    Name: "Serpent Glint",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 10 (sum of this unit's [Poise] Potency and target's [Rupture] Potency) (max 2)<br>" +
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Crit] If this unit has [Serpent Arm], inflict 2 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/HeishouPackSiBranch/SerpentGlint.png'
}

const HeishouPackSiBranchRodionSkill2: Skill = {
    Name: "Snake Fang",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 10 (sum of this unit's [Poise] Potency and target's [Rupture] Potency) (max 2)<br>" +
            "[Clash Win] Inflict +2 [Rupture] Count<br>" +
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] At 30+ [Poise], consume 10 [Poise] on self to Reuse Coin once (1 time max)<br>" +
            "[On Hit] Inflict [Deathrite - Venom]<br>" +
            "[On Crit] Gain 1 [Serpent Arm]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/HeishouPackSiBranch/SnakeFang.png'
}

const HeishouPackSiBranchRodionSkill3: Skill = {
    Name: "Serpent's Mortal Flurry",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Unfocused Volley<br>" +
            "[On Use] Coin Power +1 for every 10 (sum of this unit's [Poise] Potency and the main target's [Rupture] Potency) (max 2)<br>" +
            "[On Use] Gain Clash Power equal to [Serpent Arm] on self<br>" +
            "[On Use] Gain 3 [Serpent Arm]<br>" +
            "[Clash Win] Inflict +1 [Rupture] Count on all targets"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 2),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Crit] Reduce [Deathrite - Venom] on target by 1<br>" +
            "[On Crit] Reuse this Coin once (2 times per Skill)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/HeishouPackSiBranch/SerpentsMortalFlurry.png'
}

export const HeishouPackSiBranchRodion: Identity = {
    Id: 10912,
    Name: "Heishou Pack - Si Branch",
    Sinner: SinnerEnum.Rodion,
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
    Skills: [HeishouPackSiBranchRodionSkill1, 
            HeishouPackSiBranchRodionSkill2, 
            HeishouPackSiBranchRodionSkill3, 
            HeishouPackSiBranchRodionDefense],
    Passives: [
        new Passive("Heishou Mutation [Si]",
            PassiveTypeEnum.Combat,
            "If this unit has [Serpent Arm], deal +5% damage<br>" +
            "If target has [Deathrite - Venom], deal +5% damage",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned),

        new Passive("Intravascular Venom",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed inflicts [Rupture] damage to an enemy, inflict 1 [Offense Level Down] and 1 [Defense Level Down] next turn (once per turn)",
            [{ sin: SinEnum.Gluttony, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/HeishouPackSiBranch/10912gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/HeishouPackSiBranch/10912gacksunginfo.png'
}