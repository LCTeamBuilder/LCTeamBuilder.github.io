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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const TheManagerOfLaManchalandDonQuixoteDefense: Skill = {
    Name: "Laughters Will Subside",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Combat Start] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 10 [Bleed]<br>"+
            "[Combat Start] To 1 ally with the least HP: apply [Shimmering (Bloodfiend)] for every 50 [Bloodfeast Consumed] (shared) (max 15, once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/LaugthersWillSubside.png"
}

const TheManagerOfLaManchalandDonQuixoteDefense2: Skill = {
    Name: "Variant Sancho Hardblood Arts 15 - Buildup to Finale",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Combat Start] To (3 + (highest Reson. / 2)) allies with the least HP: apply (1 + ([Hardblood] / 10)) [Shimmering (Bloodfiend)] for every 40 [Bloodfeast Consumed] (shared), then consume half of [Hardblood] on self. (once per ally; rounded down)"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict +3 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts15BuildupToFinale.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill11: Skill = {
    Name: "Enough is Enough",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit with this Skill: heal 30% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 5 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/EnoughIsEnough.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill12: Skill = {
    Name: "Variant Sancho Hardblood Arts 9 - Whip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 20)<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 20 [Bleed]<br>"+
            "[On Use] Inflict +1 more [Bleed] On Hit for every 10 [Hardblood]. (max 2)<br>"+
            "After Attack, consume 10 [Hardblood]"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Activate [Bleed] on the target once (target loses 1 [Bleed] Count)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts9Whip.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill21: Skill = {
    Name: "Let All Blossom Free",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] this unit consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[Before Attack] Atk Weight +1 for every 10 [Hardblood] on self (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("Deal +2.5% more damage for every [Bleed] on target (max 25%)<br>"+
            "Deal +15% more damage for every 100 [Bloodfeast Consumed] by self (max 75%)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/LetAllBlossomFree.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill22: Skill = {
    Name: "Variant Sancho Hardblood Arts 8 - Split Apart",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 10)<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[Before Attack] Gain Atk Weight +1 for every 10 [Hardblood] (max 2)<br>"+
            "[After Attack] Consume 10 [Hardblood] for every Atk Weight gained"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "Deal +2.5% more damage for every [Bleed] on target (max 25%)<br>"+
            "Deal +15% more damage for every 100 [Bloodfeast Consumed] (shared) (max 75%)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts8SplitApart.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill31: Skill = {
    Name: "I Shall Impale",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 10)<br>"+
            "[On Use] Clash Power +1 for every 10 [Hardblood] (max 2)<br>"+
            "[On Use] Coin Power +1 for every 5 [Bleed] on the target (max 2)<br>"+
            "[On Use] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 10 [Bleed]<br>"+
            "[On Use] Deal +5% more damage for every [Bleed] on the target (max 50%)<br>"+
            "[On Use] Deal +20% more damage for every 100 [Bloodfeast Consumed] by self (max 100%)<br>"+
            "[After Attack] If the target is defeated, increase [Bloodfeast] by 60; gain 10 [Hardblood] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/IShallImpale.png"
}

const TheManagerOfLaManchalandDonQuixoteSkill32: Skill = {
    Name: "Ascendant Sancho Hardblood Arts - La Sangre",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 20)<br>"+
            "[On Use] Base Power +1 for every 10 [Hardblood] on self (max 3)<br>"+
            "[On Use] Coin Power +1 for every 5 [Bleed] on the target (max 2)<br>"+
            "[On Use] Deal +5% more damage for every [Bleed] on the target (max 50%)<br>"+
            "[On Use] Deal +20% more damage for every 100 [Bloodfeast Consumed] (shared) (max 100%)<br>"+
            "[After Attack] Consume 10 [Hardblood] for every 10 [Hardblood]<br>"+
            "[After Attack] If the target is defeated, increase [Bloodfeast] by 100. Regain half of [Hardblood] consumed by this Skill (once per turn)"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 8 [Bleed] and +4 [Bleed] Count<br>"+
            "[After Attack] If the target is defeated, inflict 5 [Bleed] and +1 [Bleed] Count against all enemies", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/AscendantSanchoHardbloodArtsLaSangre.png"
}

export const TheManagerOfLaManchalandDonQuixote: Identity = {
    Id: 10310,
    Name: "The Manager of La Manchaland",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 40, 20],
    DefenseLevel: 0,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [TheManagerOfLaManchalandDonQuixoteSkill11,
            TheManagerOfLaManchalandDonQuixoteSkill12, 
            TheManagerOfLaManchalandDonQuixoteSkill21, 
            TheManagerOfLaManchalandDonQuixoteSkill22, 
            TheManagerOfLaManchalandDonQuixoteSkill31, 
            TheManagerOfLaManchalandDonQuixoteSkill32, 
            TheManagerOfLaManchalandDonQuixoteDefense, 
            TheManagerOfLaManchalandDonQuixoteDefense2],
    Passives: [      
        new Passive("Bloodfeast",
            PassiveTypeEnum.Combat,
            "If this unit is on field, or is one of the units that can appear on this Stage, increase [Bloodfeast] value by the amount of [Bleed] damage collectively received by every unit.<br>"+
            "When this unit enters the field, the sleeping blood drenching the battlefield will rise above the surface.<br><br>"+
            
            "When consuming [Bloodfeast], if there are &ltLa Manchaland&gt Kindreds of the same generation as this unit, this unit takes precedence.<br><br>"+
        
            "When using 'Variant Sancho Hardblood Arts 9 - Whip', HP cannot drop below 1 due to [Bleed] damage."),

        new Passive("Variant Sancho Hardblood Arts",
            PassiveTypeEnum.Combat,
            "Turn Start: At 15+ [Hardblood], if each following unit is either defeated or participating in the Encounter, empower this unit's leftmost Slot.<br>"+
            "- The Priest of La Manchaland Gregor: Empower Skill 1<br>"+
            "- The Barber of La Manchaland Outis: Empower Skill 2<br>"+
            "- This Unit: Empower Skill 3<br>"+
            "- The Princess of La Manchaland Rodion: Empower Defense Skill<br><br>"+

            "When other units among allies take [Bleed] damage or consume [Bloodfeast], gain 2 [Hardblood] on self (3 times per turn)"),
            
        new Passive("Bearer of the Blood Kin",
            PassiveTypeEnum.Combat,
            "In an Encounter, if another allied <La Manchaland> unit is defeated:<br>"+
            "- Gain 1 more [Hardblood] when gaining [Hardblood] from this unit's Base Attack Skills<br>"+
            "- When 3+ other allied &ltLa Manchaland&gt units are defeated: gain 3 additional [Hardblood]; at Turn Start: gain 1 [Responsibility]"),

        new Passive("Armadura de Sangre",
            PassiveTypeEnum.Combat,
            "After Attack: if the enemy is defeated, increase [Bloodfeast] by 10% of the target's max HP (100 per turn; for Focused Encounters, if the Part is broken)<br><br>"+

            "Gain 1 [Damage Up] next turn for every 15% missing HP at Turn End (max 3)<br>"+
            "If an ally is about to be defeated from [Bleed] damage, prevent them from being defeated from [Bleed] damage for the turn (once per Encounter for each Identity)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("'Feed your repressed hunger, my Family'",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least HP gains 1 [Damage Up] for every 20% missing HP (max 3)<br>"+
            "- If the said ally is a &ltBloodfiend&gt, gain 1 [Damage Up] for every 15% missing HP instead. (max 3)",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TheManagerOfLaManchaland/10310gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TheManagerOfLaManchaland/10310gacksunginfo.png"
}