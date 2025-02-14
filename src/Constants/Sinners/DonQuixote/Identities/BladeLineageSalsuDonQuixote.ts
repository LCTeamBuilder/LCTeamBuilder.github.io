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

const BladeLineageSalsuDonQuixoteSkill1: Skill = {
    Name: "Draw of the Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise] on self, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/DrawOfTheSword.png'
}

const BladeLineageSalsuDonQuixoteSkill2: Skill = {
    Name: "Blade Arc",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise] on self, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Crit] To 1 ally either with no [Poise] or with the least [Poise] Potency, apply 2 [Poise]<br>"+
            "If the affected ally is from the Blade Lineage, apply 2 additional [Poise]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/BladeArc.png'
}

const BladeLineageSalsuDonQuixoteSkill3: Skill = {
    Name: "Fare Thee Well!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] on self, +1 Coin Power<br>"+
            "[On Use] Gain 5 [Poise]"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("+30% Damage on Critical Hit<br>"+
            "[On Crit] To 2 allies either with no [Poise] or with the least [Poise] Count, apply 2 [Poise] Count.<br>"+
            "[On Crit] If the affected ally is from the Blade Lineage, apply 2 additional [Poise] Count<br>"+
            "[After Attack] If the target is defeated, apply 1 [Slash DMG Up] to self and 1 random other ally next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/FareTheeWell.png'
}

const BladeLineageSalsuDonQuixoteDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/EvadeUT4.png'
}

export const BladeLineageSalsuDonQuixote: Identity = {
    Id: 10308,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 73,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuDonQuixoteSkill1, 
            BladeLineageSalsuDonQuixoteSkill2, 
            BladeLineageSalsuDonQuixoteSkill3, 
            BladeLineageSalsuDonQuixoteDefense],
    Passives: [
        new Passive("Collective Breathing",
            PassiveTypeEnum.Combat,
            "When this unit gains [Poise] Potency with its own Skill or Coin effects: give 1 Poise Potency to 1 ally with no [Poise] or with the least [Poise] Potency (5 times max)",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Nightly Stroll",
            PassiveTypeEnum.Support,
            "1 ally with the least [Poise] gains 2 more [Poise] Potency when gaining [Poise] Potency with its own Skill or Coin effects. (2 times max. Does not apply to allies without [Poise])",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/BladeLineageSalsu/10308gacksunginfo.png'
}