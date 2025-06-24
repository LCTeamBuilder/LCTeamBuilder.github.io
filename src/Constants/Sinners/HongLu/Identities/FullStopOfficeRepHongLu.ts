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

const FullStopOfficeRepHongLuDefense: Skill = {
    Name: "Combat Poise",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("Turn Start: at 0 [Ammo], activate as Power Counter instead<br>"+
            "[On Evade] Gain 1 [Poise] (5 times per turn)")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/10611044.png'
}

const FullStopOfficeRepHongLuDefense2: Skill = {
    Name: "Beyond the Shadow",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "+20% Damage on Critical Hit<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[Turn End] [Reload (Full-Stop Office)] (once per Encounter)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061107.png'
}

const FullStopOfficeRepHongLuSkill11: Skill = {
    Name: "Take the Shot",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("Spend 1 [Ammo]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Gain 2 [Poise]", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Gain 2 [Poise]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061101.png'
}

const FullStopOfficeRepHongLuSkill12: Skill = {
    Name: "Melee Support",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("+20% Damage on Critical Hit<br>"+
"           [On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061108.png'
}

const FullStopOfficeRepHongLuSkill21: Skill = {
    Name: "Target Marked",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every [Ammo] about to be spent by this Skill<br>"+
            "[On Use] If Full-Stop Office Fixer Heathcliff is on the field, every Reson. of the highest Reson. adds 25% chance that this unit activates [Target Spotted]<br>"+
            "[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("Spend up to 3 [Ammo]<br>"+
            "Deal +([Ammo] spent x 10)% more damage<br>"+
            "+([Ammo] spent x 10)% more damage on Critical Hit", 2),
        new SkillDescriptionPart("+20% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 [Attack Power Down] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061102.png'
}

const FullStopOfficeRepHongLuSkill22: Skill = {
    Name: "Combo: Target Marked",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every [Ammo] about to be spent by this Skill<br>"+
            "[On Use] Gain +3 [Poise] Count<br>"+
            "[Clash Lose] Final Power +5"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("Spend up to 3 [Ammo]<br>"+
            "Deal +([Ammo] spent x 10)% more damage<br>"+
            "+([Ammo] spent x 10)% more damage on Critical Hit", 2),
        new SkillDescriptionPart("+20% Damage on Critical Hit <br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 [Attack Power Down] next turn", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "+30% Damage on Critical Hit", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061105.png'
}

const FullStopOfficeRepHongLuSkill31: Skill = {
    Name: "Full-Stop to Life",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every [Ammo] about to be spent by this Skill<br>"+
            "[On Use] If Full-Stop Office Fixer Heathcliff is on the field, activate [Target Spotted]<br>"+
            "[On Use] Gain 5 [Poise]<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "Deal +([Ammo] spent x 15)% more damage<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 15% of damage dealt", 1),
        new SkillDescriptionPart("Spend up to 2 [Ammo]<br>"+
            "Deal +([Ammo] spent x 15)% more damage<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 15% of damage dealt", 2),
        new SkillDescriptionPart("If target is Staggered, +30% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Pierce Fragility]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061103.png'
}

const FullStopOfficeRepHongLuSkill32: Skill = {
    Name: "Combo: Full-Stop to Life",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 for every [Ammo] about to be spent by this Skill<br>"+
            "[On Use] Gain 5 [Poise]<br>"+
            "[Clash Win] Gain +2 [Poise] Count<br>"+
            "[Clash Lose] Final Power +5"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "Deal +([Ammo] spent x 15)% more damage<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 15% of damage dealt", 1),
        new SkillDescriptionPart("Spend up to 2 [Ammo]<br>"+
            "Deal +([Ammo] spent x 15)% more damage<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 15% of damage dealt", 2),
        new SkillDescriptionPart("If target is Staggered, +30% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Pierce Fragility]", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "+50% Damage on Critical Hit<br>"+
            "Deal +(the target's Pierce Res. x 50)% more damage", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/FullStopOfficeRep/1061106.png'
}

export const FullStopOfficeRepHongLu: Identity = {
    Id: 10611,
    Name: "Full-Stop Office Rep",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [FullStopOfficeRepHongLuSkill11,
            FullStopOfficeRepHongLuSkill12, 
            FullStopOfficeRepHongLuSkill21, 
            FullStopOfficeRepHongLuSkill22, 
            FullStopOfficeRepHongLuSkill31, 
            FullStopOfficeRepHongLuSkill32, 
            FullStopOfficeRepHongLuDefense, 
            FullStopOfficeRepHongLuDefense2],
    Passives: [      
        new Passive("Concentration",
            PassiveTypeEnum.Combat,
            "When flipping a Coin that consumes [Ammo]: even when this unit is out of [Ammo], the attack does not get cancelled.<br>"+
            "However, the affected Coins' On Hit effects do not activate in such cases."),

        new Passive("Tactical Fire Support",
            PassiveTypeEnum.Combat,
            "If the Full-Stop Office Fixer Heathcliff is in [Overwatch Assignment] state, or has been Deployed as a Backup unit, empower Full-Stop Office Rep. Hong Lu's Skill 2 and Skill 3<br>"+
            "Combat Start: at 20+ [Poise] Potency, gain +1 [Poise] Count",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),
            
        new Passive("Suppressing Fire",
            PassiveTypeEnum.Support,
            "Ally Identity with the most [Ammo] deals +10% more damage with Skills that spend [Ammo]<br>"+
            "(Does not activate when out of Ammo)",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/HongLu/Identities/FullStopOfficeRep/10611gacksung.png',
    PortraitImageDir: './assets/Sinners/HongLu/Identities/FullStopOfficeRep/10611gacksunginfo.png'
}