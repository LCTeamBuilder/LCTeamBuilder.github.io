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

const HeishouPackMaoBranchRyoshuDefense: Skill = {
    Name: "Strider. Unleashed. Heh",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[On Use] If this unit's Speed is faster than the target's, gain Base Power based on Speed difference (Base Power +1 for every 2 Speed difference; max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/HeishouPackMaoBranch/StriderUnleashedHeh.png'
}

const HeishouPackMaoBranchRyoshuSkill1: Skill = {
    Name: "Blinkstep",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1<br>" +
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/HeishouPackMaoBranch/Blinkstep.png'
}

const HeishouPackMaoBranchRyoshuSkill2: Skill = {
    Name: "As Written",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Rupture] Potency on target)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1<br>" +
            "[On Use] Gain 2 [Haste] next turn (once per turn)<br>" +
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("At 10+ Speed, deal +30% damage<br>" +
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/HeishouPackMaoBranch/AsWritten.png'
}

const HeishouPackMaoBranchRyoshuSkill3: Skill = {
    Name: "I'll gut you with a curse-engraved sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +(Speed difference x [Rupture] Potency on target)% damage (max 50%)<br>" +
            "If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>" +
            "[On Use] If target has 15+ [Rupture], Coin Power +1<br>" +
            "[On Use] Gain 3 [Strider - Mao]<br>" +
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] Inflict [Deathrite - Haste]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("At 10+ Speed, deal +30% damage<br>" +
            "[On Hit] Inflict 3 [Rupture]<br>" +
            "[On Hit] At 10+ Speed, Reuse Coin once (once per Skill)<br>" +
            "[Reuse - On Hit] Inflict [Deathrite - Haste]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/HeishouPackMaoBranch/IllGutYouWithACurseEngravedSword.png'
}

export const HeishouPackMaoBranchRyoshu: Identity = {
    Id: 10411,
    Name: "Heishou Pack - Mao Branch",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 69,
    HealthPerLevel: 2.34,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: -2,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [HeishouPackMaoBranchRyoshuSkill1, 
            HeishouPackMaoBranchRyoshuSkill2, 
            HeishouPackMaoBranchRyoshuSkill3, 
            HeishouPackMaoBranchRyoshuDefense],
    Passives: [
        new Passive("Heishou Mutation [Mao]",
            PassiveTypeEnum.Combat,
            "If this unit has [Strider - Mao], deal +5% damage<br>" +
            "If the target has [Deathrite - Haste], deal +5% damage",
            [{ sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Partial Heishou Mutation Training",
            PassiveTypeEnum.Support,
            "Turn End: 1 ally with the fastest Speed gains 2 [Haste] next turn",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ryoshu/Identities/HeishouPackMaoBranch/10411gacksung.png',
    PortraitImageDir: './assets/Sinners/Ryoshu/Identities/HeishouPackMaoBranch/10411gacksunginfo.png'
}