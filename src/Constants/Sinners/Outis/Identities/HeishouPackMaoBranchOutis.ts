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

const HeishouPackMaoBranchOutisDefense: Skill = {
    Name: "Partial Heishou Mutation",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[On Use] If this unit's Speed is faster than the target's, gain Base Power based on Speed difference (Base Power +1 for every 2 Speed difference; max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/HeishouPackMaoBranch/PartialHeishouMutation.png'
}

const HeishouPackMaoBranchOutisSkill1: Skill = {
    Name: "Blinkstep",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/HeishouPackMaoBranch/Blinkstep.png'
}

const HeishouPackMaoBranchOutisSkill2: Skill = {
    Name: "Perforating Kill",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1<br>" +
            "[On Unopposed Attack] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] Gain 1 [Haste] next turn (2 times per turn)", 1),
        new SkillDescriptionPart("At 10+ Speed, deal +30% damage<br>" +
            "[On Hit] Inflict +1 [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/HeishouPackMaoBranch/PerforatingKill.png'
}

const HeishouPackMaoBranchOutisSkill3: Skill = {
    Name: "Cursewrit Butcherblade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Rupture] Potency on target)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>" +
            "[On Use] If target has 15+ [Rupture], Coin Power +1<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[On Unopposed Attack] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Hit] Inflict [Deathrite - Haste]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)<br>" +
            "[Reuse - On Hit] Inflict [Deathrite - Haste]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/HeishouPackMaoBranch/CursewritButcherblade.png'
}

export const HeishouPackMaoBranchOutis: Identity = {
    Id: 11112,
    Name: "Heishou Pack - Mao Branch",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.34,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [HeishouPackMaoBranchOutisSkill1, 
            HeishouPackMaoBranchOutisSkill2, 
            HeishouPackMaoBranchOutisSkill3, 
            HeishouPackMaoBranchOutisDefense],
    Passives: [
        new Passive("Heishou Mutation [Mao]",
            PassiveTypeEnum.Combat,
            "If this unit has [Strider - Mao] and the target has [Deathrite - Haste], deal +5% damage for every [Strider - Mao] (max 15%)",
            [{ sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("A Husk of Hares",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed: when attacking targets with [Rupture], deal +10% damage<br>" +
            "Gain 1 [Haste] next turn (once per turn)",
            [{ sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/HeishouPackMaoBranch/11112gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/HeishouPackMaoBranch/11112gacksunginfo.png'
}