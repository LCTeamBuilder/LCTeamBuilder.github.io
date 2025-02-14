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

const LobotomyEgoLanternDonQuixoteSkill1: Skill = {
    Name: "I Shall Nibble Thee!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/IShallNibbleThee.png'
}

const LobotomyEgoLanternDonQuixoteSkill2: Skill = {
    Name: "Flashing Lure",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If the target has 2 or less [Rupture] Count, inflict +3 [Rupture] Count", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/FlashingLure.png'
}

const LobotomyEgoLanternDonQuixoteSkill3: Skill = {
    Name: "Whirlwind Om-Nom-Nom!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Heal 15 HP. Heal by +50% more HP when reusing Coin.<br>"+
            "[On Hit] Heal additional HP based on [Rupture] on target (2 HP healed per 1 [Rupture]. Max 40)<br>"+
            "At 50%- HP, reuse Coin once", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/WhirldwindOmNomNom.png'
}

const LobotomyEgoLanternDonQuixoteDefense: Skill = {
    Name: "Chattering Teeth",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 6+ [Rupture], Final Power +3<br>"+
            "[Turn End] Heal HP equal to remaining Shield HP (Once per turn. Max Heal amount: 10% of Max HP)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/ChatteringTeethUT4.png'
}

export const LobotomyEgoLanternDonQuixote: Identity = {
    Id: 10307,
    Name: "Lobotomy E.G.O::Lantern",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoLanternDonQuixoteSkill1, 
            LobotomyEgoLanternDonQuixoteSkill2, 
            LobotomyEgoLanternDonQuixoteSkill3, 
            LobotomyEgoLanternDonQuixoteDefense],
    Passives: [
        new Passive("Om Nom Nom",
            PassiveTypeEnum.Combat,
            "If this unit's Skill Slot has [Aggro], Clash Power +1<br>"+
            "Heal 6 HP every time this unit hits enemies that targeted this unit with an Attack Skill in the Chaining Phase (For Abnormalities, each Part is calculated separately)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Illumilantern",
            PassiveTypeEnum.Support,
            "The ally with the highest [Aggro] Skill Slot heals 4 HP every time they hit an enemy that targets this unit (Does not apply to units without [Aggro])",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksunginfo.png'
}