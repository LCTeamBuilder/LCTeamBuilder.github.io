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

const FirefistOfficeSurvivorGregorDefense: Skill = {
    Name: "I have to keep going for big sis",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[Combat Start] Gain 100 [District 12 Fuel]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/FirefistOfficeSurvivor/IHaveToKeepGoingForBigSis.png'
}

const FirefistOfficeSurvivorGregorSkill1: Skill = {
    Name: "Flamethrow",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Consume 15 [District 12 Fuel] to inflict +2 [Burn] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/FirefistOfficeSurvivor/Flamethrow.png'
}

const FirefistOfficeSurvivorGregorSkill2: Skill = {
    Name: "I'll burn away every last drop of your filthy blood",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (max 2)<br>" +
            "Coins that consumed [District 12 Fuel] deal +15% damage<br>" +
            "- When in [Overheated Fuel] state, deal +30% damage instead"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>" +
            "[On Hit] Consume 10 [District 12 Fuel] to inflict 2 [Burn] against 2 targets with the least [Burn] Potency", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count<br>" +
            "[On Hit] Consume 10 [District 12 Fuel] to inflict +1 [Burn] Count against 2 targets with the least [Burn] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/FirefistOfficeSurvivor/IllBurnAwayEveryLastDropOfYourFilthyBlood.png'
}

const FirefistOfficeSurvivorGregorSkill3: Skill = {
    Name: "Firefist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] Count on target (max 2)<br>" +
            "[On Use] Base Power +1 for every 6 [Burn] on target (max 3)<br>" +
            "[On Use] Consume up to 25 [District 12 Fuel] and deal +2% damage for every [District 12 Fuel] consumed (max 50%)<br>" +
            "- When in [Overheated Fuel] state, deal +4% damage for every [District 12 Fuel] consumed (max 100%)<br>" +
            "[After Attack] If target is defeated, or if this Skill consumed [District 12 Fuel], gain 2 [Blunt DMG Up] next turn"),
        new SkillDescriptionPart("[On Hit] If [District 12 Fuel] was consumed, inflict 2 [Burn] and +1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] If [District 12 Fuel] was consumed, inflict 2 [Burn] and +1 [Burn] Count", 2),
        new SkillDescriptionPart("[On Hit] Deal +2% damage for every [District 12 Fuel] consumed by this Skill (max 50%)<br>" +
            "- When in [Overheated Fuel] state, deal +4% damage for every [District 12 Fuel] consumed instead (max 100%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/FirefistOfficeSurvivor/Firefist.png'
}

export const FirefistOfficeSurvivorGregor: Identity = {
    Id: 11211,
    Name: "Firefist Office Survivor",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.95,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 0],
    DefenseLevel: +3,
    SlashResist: 0.5,
    PierceResist: 2,
    BluntResist: 1,
    Skills: [FirefistOfficeSurvivorGregorSkill1, 
            FirefistOfficeSurvivorGregorSkill2, 
            FirefistOfficeSurvivorGregorSkill3, 
            FirefistOfficeSurvivorGregorDefense],
    Passives: [
        new Passive("District 12 Special Workshop Fuel",
            PassiveTypeEnum.Combat,
            "Begin Encounters with 100 [District 12 Fuel]<br>" +
            "- At over 50 Stack, become [District 12 Fuel]<br>" +
            "- At 50 or less Stack, any [District 12 Fuel] becomes [Overheated Fuel]"),

        new Passive("I'm the only survivor…",
            PassiveTypeEnum.Combat,
            "Deal +0.2% damage for every [District 12 Fuel] and [Overheated Fuel] this unit consumed in this Encounter (max 40%)<br>" +
            "- If the main target is a <Bloodfiend>, <Bloodbag>, or if the sum of [Burn] and [Burn] Count is 30+, deal +0.3% damage instead (max 60%)<br><br>" +
            "At 1+ [District 12 Fuel] or [Overheated Fuel], if this unit Staggers or defeats enemies with [Burn], inflict +2 [Burn] Count against 2 random enemies without [Burn] or with the least [Burn] Count (once per turn)<br>" +
            "- For Focused Encounters, on Parts",
            [{ sin: SinEnum.Wrath, amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Like a Serpent: Flexible, Elastic, and Unpredictable",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed: On Hit, deal +5% more Wrath Damage for every 6 [Burn] on the target (max 20%)",
            [{ sin: SinEnum.Wrath, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/FirefistOfficeSurvivor/11211gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/FirefistOfficeSurvivor/11211gacksunginfo.png'
}