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

const BladeLineageMentorMeursaultDefense: Skill = {
    Name: "Overthrow",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Slash Power Up] next turn (1 time max)<br>"+
            "Deal +0.5% more Damage per 1% missing HP on self (Max 25%)"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/OverthrowUT4.png'
}

const BladeLineageMentorMeursaultSkill1: Skill = {
    Name: "Draw of the Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise], Coin Power +1<br>"+
            "[Combat Start] Apply 1 [Swordplay of the Homeland - Rending] to (Highest A-Reson.) other Blade Lineage allies in ascending order of Speeds (slowest to fastest, 2 times max)<br>"+
            "- If there are 6 or more allied Blade Lineage Identities in the Encounter, apply 2 instead<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/DrawOfTheSword.png'
}

const BladeLineageMentorMeursaultSkill2: Skill = {
    Name: "Acupuncture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1<br>"+
            "[Combat Start] Apply 1 [Swordplay of the Homeland - Penetrating] to (Highest A-Reson.) other Blade Lineage allies in ascending order of Speeds (slowest to fastest, 2 times max)<br>"+
            "- If there are 6 or more allied Blade Lineage Identities in the Encounter, apply 2 instead<br>"+
            "[On Use] Gain +3 [Poise] Count<br>"+
            "[Clash Win] Gain 1 [Slash Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("+60% Damage on Critical Hit", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/Acupuncture.png'
}

const BladeLineageMentorMeursaultSkill3: Skill = {
    Name: "Yield My Flesh",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "[Clash Lose] After getting hit, use 'To Claim Their Bones' Skill<br>"+
            "[On Crit] Deal +3% damage on Critical Hit for every [Poise] Potency on self (Max 75%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/YieldMyFlesh.png'
}

const BladeLineageMentorMeursaultSkill4: Skill = {
    Name: "To Claim Their Bones",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] For every 7 [Poise] on self, +1 Atk Weight (Max. 2)<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[On Use] Deal +2% damage on Critical Hit for every [Poise] Potency on self (Max 50%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)<br>"+
            "If this Skill targets only a single enemy, deal +100% more damage (In Focused Encounters, a single Part)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 5 [Paralyze] next turn", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/ToClaimTheirBones.png'
}

export const BladeLineageMentorMeursault: Identity = {
    Id: 10508,
    Name: "Blade Lineage Mentor",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [80, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageMentorMeursaultSkill1,
            BladeLineageMentorMeursaultSkill2,
            BladeLineageMentorMeursaultSkill3,
            BladeLineageMentorMeursaultSkill4,
            BladeLineageMentorMeursaultDefense],
    Passives: [
        new Passive("In Memoriam",
            PassiveTypeEnum.Combat,
            "When 3 or more other Blade Lineage allies are defeated:<br>"+
            "- When gaining [Poise] Potency/Count with this unit's own Skills and Coin effects: gain 1 more of each<br>"+
            "- When 5 or more other Blade Lineage allies are defeated, gain 2 more of each instead<br>"+
            "- Combat Start: Apply [Swordplay of the Homeland] buff on self"),

        new Passive("Swordplay of the Homeland",
            PassiveTypeEnum.Combat,
            "In this Encounter, when this unit takes damage that brings their HP down to 0, nullify that damage, then, this unit's HP cannot drop below 1 for the turn. (Once per Encounter)<br><br>"+
            
            "When this unit gains [Poise] Potency/Count with its own Skill or Coin effects: give 1 [Poise] Potency and +1 [Poise] Count to 2 other Blade Lineage allies with no [Poise] or with the least [Poise]<br>"+
            "- If there are 6 or more Blade Lineage allies participating in this Encounter, give 2 [Poise] Potency and +2 [Poise] Count instead<br><br>"+

            "- Combat Start: Apply [Swordplay of the Homeland] buff to all other Blade Lineage allies",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Swordplay of the Homeland",
            PassiveTypeEnum.Support,
            "1 ally with the most [Poise] on Combat Start deals +15% Slash damage on Critical Hits",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/BladeLineageMentor/10508gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/BladeLineageMentor/10508gacksunginfo.png'
}