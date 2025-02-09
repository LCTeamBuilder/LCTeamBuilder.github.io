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

const ThePriestOfLaManchalandGregorDefense: Skill = {
    Name: "Faded Patience",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 40%+ HP, gain 5 [Bleed] and activate [Bleed] up to 3 times on self (once per turn, lose [Bleed] Count equal to the number of times it was activated)<br>"+
            "[Combat Start] At less than 40% HP, consume up to 20 [Bloodfeast] and heal the same value as HP (once per turn)<br>"+
            "[Combat Start] Gain 3 [Ailing Heart] (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/FadedPatienceUT4.png'
}

const ThePriestOfLaManchalandGregorSkill1: Skill = {
    Name: "Sacrifice for the Family",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Coin Power +1 for every X [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "- At 50%+ HP, gain additional 10 [Bleed]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Gain 3 [Bloodied Hand]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/SacrificeForTheFamily.png'
}

const ThePriestOfLaManchalandGregorSkill2: Skill = {
    Name: "Suffocating Guilt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[On Use] At 5+ [Ailing Heart], consume up to 60 [Bloodfeast], then, gain 1 [Bloodied Hand] for every 6 [Bloodfeast] consumed<br>"+
            "- At less than 5+ [Ailing Heart], gain 10 [Bleed] and 3 [Bloodied Hand]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Gain 3 [Bloodied Hand]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/SuffocatingGuilt.png'
}

const ThePriestOfLaManchalandGregorSkill3: Skill = {
    Name: "Nightmare Hunt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 100 per Skill)<br>"+
            "[On Use] Deal +1.5% more damage for every X% missing HP on self<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] Consume every excess Stack of [Bloodied Hand] past 10 Stack to gain the following effects:<br>"+
            "- Heal (Stacks consumed x 3) HP on self<br>"+
            "- If this unit consumed 10+ Stack, Coin Power +1<br>"+
            "- If this unit consumed 20+ Stack, Reuse the final Coin<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[After Attack] Heal 10% HP on self"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Bloodied Hand]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Inflict 2 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/TheUnforgivableSin.png'
}

export const ThePriestOfLaManchalandGregor: Identity = {
    Id: 11210,
    Name: "The Priest of La Manchaland",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 108,
    HealthPerLevel: 3.41,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ThePriestOfLaManchalandGregorSkill1, 
            ThePriestOfLaManchalandGregorSkill2, 
            ThePriestOfLaManchalandGregorSkill3, 
            ThePriestOfLaManchalandGregorDefense],
    Passives: [
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will surface."),

        new Passive("Self-destructive Dedication",
            PassiveTypeEnum.Combat,
            "Turn End: heal (10 - [Ailing Heart]) SP for the ally with the least SP (excluding: self or allies that are Panicked or Corroded)<br>"+
            "In this Encounter, when this unit takes damage that brings their HP down to X, nullify that damage, then, this unit's HP cannot drop below 1 for the turn.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Don Quixote Hardblood Arts 6: Whip",
            PassiveTypeEnum.Support,
            "1 ally with the lowest HP percentage heals 3 HP On Hit (3 times per turn)<br>"+
            "- If the target hit by the said ally had [Bleed], heal 3 additional HP",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/ThePriestOfLaManchaland/11210gacksunginfo.png'
}