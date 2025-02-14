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

const EdgarFamilyHeirGregorDefense: Skill = {
    Name: "Do You Wish to Weep?",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use]Coin Power +1 for every 3 [Sinking] on target (max 3)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/DoYouWishToWeepUT4.png'
}

const EdgarFamilyHeirGregorSkill1: Skill = {
    Name: "Sabre Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 3 [Sinking] on target (max 2)<br>"+
            "[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/SabreSlash.png'
}

const EdgarFamilyHeirGregorSkill2: Skill = {
    Name: "Remise",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If that target has 6+ [Sinking], Coin Power +1<br>"+
            "[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 2)<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] If the target has 5+ [Sinking], gain 1 [Haste] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/Remise.png'
}

const EdgarFamilyHeirGregorSkill3: Skill = {
    Name: "Nightmare Hunt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 3)<br>"+
            "[After Attack] If the target is Staggered, inflict +3 [Sinking] Count<br>"+
            "[After Attack] If the target is defeated, inflict +3 [Sinking] Count on 2 random enemies"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 3),
        new SkillDescriptionPart("[On Hit] Absorb 10 [Sinking] from the target and gain 1 [Plus Coin Boost] and 3 [Damage Up] next turn. 50% chance to gain the above effects without absorbing [Sinking].", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/NightmareHunt.png'
}

export const EdgarFamilyHeirGregor: Identity = {
    Id: 11209,
    Name: "Edgar Family Heir",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyHeirGregorSkill1, 
            EdgarFamilyHeirGregorSkill2, 
            EdgarFamilyHeirGregorSkill3, 
            EdgarFamilyHeirGregorDefense],
    Passives: [
        new Passive("Endless Nightmares",
            PassiveTypeEnum.Combat,
            "Combat Start: gain 1 [Damage Up] and 1 [Fragile] for every 5 SP difference between Combat Start and last Turn Start (max 5)<br>"+
            "- Deal +2% more damage for every [Sinking] Potency on target (max 40%)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Suffering",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least SP loses 5 SP, then gains 1 [Gloom DMG Up]",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/EdgarFamilyHeir/11209gacksunginfo.png'
}