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

const FullStopOfficeFixerHeathcliffDefense: Skill = {
    Name: "Combat Poise",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 0 [Ammo], this Skill activates as 'Taking Cover' instead<br>"+
            "[On Use] If Full-Stop Office Rep Hong Lu is on the field, request [Melee Support] from that unit (once per turn)<br>"+
            "[On Evade] Gain 3 [Poise] (3 times per turn)<br>"+
            "[Turn End] Gain 1 [Concentration(Sniper)] next turn (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/10711044.png'
}

const FullStopOfficeFixerHeathcliffDefense2: Skill = {
    Name: "Taking Cover",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[On Use] If Full-Stop Office Rep Hong Lu is on the field, request [Melee Support] from that unit (once per turn)<br>"+
            "[Clash Win] Inflict 1 [Pierce Resist Down] (once per turn)<br>"+
            "[Turn End] Gain 1 [Concentration(Sniper)] next turn (once per turn)"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/10711064.png'
}

const FullStopOfficeFixerHeathcliffSkill1: Skill = {
    Name: "Return Fire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: 3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "[On Use] Gain 2 [Haste] next turn (once per turn)"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/1071101.png'
}

const FullStopOfficeFixerHeathcliffSkill2: Skill = {
    Name: "Headshot",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +10% more damage for every 1 Speed difference (max 50%) <br>"+
            "[On Use] Gain 3 [Poise]; gain +2 [Poise] Count (max 50%)<br>"+
            "[On Use] Gain 2 [Haste] next turn (once per turn)"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "+50% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 1 [Pierce Fragility] (2 times per turn)<br>"+
            "[On Crit] Inflict 1 [Pierce Fragility] next turn (once per turn)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/1071102.png'
}

const FullStopOfficeFixerHeathcliffSkill31: Skill = {
    Name: "Goin' for the Bullseye",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Use] If this unit has [Ammo - Atelier Logic], activate 'AL-HV Pulverisation Round' instead<br>"+
            "If this unit's Speed is faster than the target's, deal +10% more damage for every 1 Speed difference (max 50%)<br>"+
            "[On Use] Gain 5 [Poise]<br>"+
            "[On Use] Consume all [Concentration(Sniper)] on self, gain (value consumed x 2) [Poise] Potency, and deal +(value consumed x 12.5)% more damage<br>"+
            "[After Attack] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "+80% Damage on Critical Hit<br>"+
            "+(the target's Pierce Res. x 50)% Damage on Critical Hit<br>"+
            "[On Crit] At more than 30 [Poise] Potency, consume up to 10 of [Poise] Potency over 30 to deal +([Poise] Potency consumed x 10)% more damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/1071103.png'
}

const FullStopOfficeFixerHeathcliffSkill32: Skill = {
    Name: "AL-HV Pulverisation Round",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +6,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, deal +10% more damage for every 1 Speed difference (max 50%)<br>"+
            "[On Use] Gain 5 [Poise]<br>"+
            "[On Use] Consume all [Concentration(Sniper)] on self, gain (value consumed x 2) [Poise] Potency, and deal +(value consumed x 25)% more damage<br>"+
            "[After Attack] Gain +5 [Poise] Count"),
        new SkillDescriptionPart("Spend 1 [Ammo - Atelier Logic]<br>"+
            "+130% Damage on Critical Hit<br>"+
            "+(target's Pierce Res. x 50)% Damage on Critical Hit<br>"+
            "[On Crit] At more than 30 [Poise] Potency, consume up to 10 of [Poise] Potency over 30 to deal +([Poise] Potency consumed x 10)% more damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/FullStopOfficeFixer/1071105.png'
}

export const FullStopOfficeFixerHeathcliff: Identity = {
    Id: 10711,
    Name: "Full-Stop Office Fixer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.3,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [FullStopOfficeFixerHeathcliffSkill1, 
            FullStopOfficeFixerHeathcliffSkill2, 
            FullStopOfficeFixerHeathcliffSkill31, 
            FullStopOfficeFixerHeathcliffSkill32, 
            FullStopOfficeFixerHeathcliffDefense, 
            FullStopOfficeFixerHeathcliffDefense2],
    Passives: [      
        new Passive("Snipe",
            PassiveTypeEnum.Combat,
            "Encounter Start: gain 3 [Pierce Power Up]<br><br>"+

            "When this unit enters the Encounter, gain 1 [Ammo - Atelier Logic]<br><br>"+

            "Turn End: if this unit does not have any remaining [Ammo], activate [Overwatch Assignment] (once per Encounter) <br><br>"+

            "If this unit is Substituted in, or is rejoining battle after [Overwatch Assignment], gain max [Concentration(Sniper)], 3 [Pierce Power Up], and [Reload (Full-Stop Office)] (except [Ammo - Atelier Logic] ammunition; once per Encounter) )"),

        new Passive("Precision Aim",
            PassiveTypeEnum.Combat,
            "Turn End: gain 1 [Haste] next turn for every 10 [Poise] on self (max 2)<br><br>"+

            "Encounter Start: if this unit is not set to use any Attack Skills (including E.G.O Skills), apply 3 [Poise] to 1 ally with the least [Poise] Potency<br><br>"+
            
            "Turn End: if this unit did not use any Attack Skills (including E.G.O Skills, excluding [Target Spotted]), gain 10 [Poise] and 1 [Pierce Power Up] next turn",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Spotter",
            PassiveTypeEnum.Support,
            "1 ally with the least [Ammo] gains +2 [Poise] Count when using a Skill that consumes [Ammo]<br>"+
            "- If the said ally is a Full-Stop Office Identity, or if they have less than 5 [Poise] Count, gain +4 [Poise] Count instead (once per turn; does not apply to units without [Ammo])",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/FullStopOfficeFixer/10711gacksung.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/FullStopOfficeFixer/10711gacksunginfo.png'
}