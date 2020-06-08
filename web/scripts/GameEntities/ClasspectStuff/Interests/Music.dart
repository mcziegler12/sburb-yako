import "../../../SBURBSim.dart";
import "Interest.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Music extends InterestCategory {

    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[new AssociatedStat(Stats.SANITY, 1.0, true), new AssociatedStat(Stats.MAX_LUCK, 1.0, true)]);
    @override
    List<String> handles1 = <String>["musical", "pianist", "melodious", "keyboard", "rhythmic", "singing", "tuneful", "harmonious", "beating", "pitch", "waltzing", "synthesized", "piano", "serenading", "mozarts", "swelling", "staccato", "pianissimo", "monotone", "polytempo"];

    List<String> handles2 = <String>["Lyricist","Siren", "Singer", "Tenor", "Trumpeter", "Baritone", "Dancer", "Ballerina", "Harpsicordist", "Musician", "Lutist", "Violist", "Rapper", "Harpist", "Lyricist", "Virtuoso", "Bass"];

    @override
    List<String> levels =<String>["SINGING SCURRYWORT", "MUSICAL MOPPET"];

    @override
    List<String> interestStrings = <String>["Rap", "Music", "Song Writing", "Musicals", "Dance", "Singing", "Ballet", "Playing Guitar", "Playing Piano", "Mixtapes", "Turntables"];


    Music() :super(1, "Music", "musical", "loud");

    @override
    void initializeItems() {
        items = new WeightedList<Item>()
            ..add(new Item("Piano",<ItemTrait>[ItemTraitFactory.BLUNT, ItemTraitFactory.WOOD, ItemTraitFactory.MUSICAL, ItemTraitFactory.CLASSY],shogunDesc: "Elephant Corpse Turned Amazing Instrument",abDesc:"An entire piano. In your inventory. WHY."))
            ..add(new Item("Flute",<ItemTrait>[ItemTraitFactory.METAL, ItemTraitFactory.MUSICAL],shogunDesc: "Pipe of Screeches 2: Orchestral Shitstorm",abDesc:"I feel like a spaceship captain should play this."))
            ..add(new Item("Microphone",<ItemTrait>[ItemTraitFactory.LOUD, ItemTraitFactory.ZAP],shogunDesc: "Speaking Tube of Passion +3",abDesc:"Do you really deserve to drop this like it's hot?"))
            ..add(new Item("Violin",<ItemTrait>[ItemTraitFactory.WOOD, ItemTraitFactory.MUSICAL],shogunDesc: "Tiny Cello"))
            ..add(new Item("Sheet Music",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.MUSICAL],shogunDesc: "Cheat Codes for Instruments"))
            ..add(new Item("Electric Guitar",<ItemTrait>[ItemTraitFactory.PLASTIC, ItemTraitFactory.MUSICAL, ItemTraitFactory.ZAP, ItemTraitFactory.LOUD, ItemTraitFactory.COOLK1D],shogunDesc: "Electrical Stringed Music Maker"))
            ..add(new Item("Turn Tables",<ItemTrait>[ItemTraitFactory.PLASTIC, ItemTraitFactory.MUSICAL, ItemTraitFactory.ZAP, ItemTraitFactory.COOLK1D],shogunDesc: "Spinning Disc Sound Maker"))
            ..add(new Item("Guitar",<ItemTrait>[ItemTraitFactory.WOOD, ItemTraitFactory.MUSICAL],shogunDesc: "String Music Maker"));

    }


    @override
    void initializeThemes() {
        addTheme(new Theme(<String>["Pianos","Music","Harmony", "Rain", "Songs", "Violins", "Harps","Strings", "Notes", "Violas", "Guitars"])
            ..addFeature(FeatureFactory.MUSICSOUND, Feature.WAY_HIGH)
            ..addFeature(FeatureFactory.DISCOSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.JAZZSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.HAPPYFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.BIRDCONSORT, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Play the Music", [
                new Quest("The ${Quest.PLAYER1} meets a wise old ${Quest.CONSORT} who tells that the ${Quest.DENIZEN} can only be awoken by the Legendary Hero playing the ${Quest.MCGUFFIN}. Huh. Do you think that's gonna be a thing?"),
                new Quest("The ${Quest.PLAYER1} learns of a series of ${Quest.PHYSICALMCGUFFIN}s that prevent the ${Quest.MCGUFFIN} from being played. Hrmmmm...how are they gonna clear this up?   "),
                new Quest(" The ${Quest.PLAYER1} has finally fixed the ${Quest.PHYSICALMCGUFFIN}. They play the ${Quest.MCGUFFIN} and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The ${Quest.PLAYER1} was the Hero all along? Wow.")
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            ..addFeature(new PreDenizenQuestChain("Play the Crowd", [
                new Quest("The ${Quest.PLAYER1} finds an empty, trashed ${Quest.MCGUFFIN} Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."),
                new Quest("The ${Quest.PLAYER1} puts in a lot of effort cleaning the ${Quest.MCGUFFIN} Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy ${Quest.PHYSICALMCGUFFIN}.  "),
                new Quest(" It's finally opening night for the ${Quest.MCGUFFIN} Jazz Bar. There's a line of ${Quest.CONSORTSOUND}ing ${Quest.CONSORT}s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the ${Quest.PLAYER1}, claiming to be the original owner. They are impressed with the revival of the ${Quest.MCGUFFIN} Jazz Bar and offer a deal.")
            ], new SpecificCarapaceReward(NPCHandler.JS), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);


        addTheme(new Theme(<String>["Hymns","Choirs","Chorus", "Voices", "A Capella","Chants"])
            ..addFeature(FeatureFactory.SINGINGSOUND, Feature.WAY_HIGH)
            ..addFeature(FeatureFactory.DANGEROUSFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CLANKINGSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.HAPPYFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.BIRDCONSORT, Feature.WAY_HIGH)
            ..addFeature(new PreDenizenQuestChain("Sing the Song", [
                new Quest("The ${Quest.PLAYER1} learns of a lost song, said to contain the power of ${Quest.MCGUFFIN}. Any who can sing it are destined to be strong enough to face the ${Quest.DENIZEN}. "),
                new Quest("The ${Quest.PLAYER1} has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of ${Quest.MCGUFFIN}. They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),
                new Quest("A ${Quest.PHYSICALMCGUFFIN}! That's the key! The ${Quest.PLAYER1} equips it and instantly finds themselves able to sing the ${Quest.MCGUFFIN} song. The burst of music in their chest makes them feel ready to take on anything, but especially the ${Quest.DENIZEN}."),
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);

        //the sock ruse was a distaction
        addTheme(new Theme(<String>["Beat","Rhythm","Flow", "Raps", "Rhyme", "Grove", "Funk"])
            ..addFeature(FeatureFactory.DRUMSOUND, Feature.WAY_HIGH)
            ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.SKELETONCONSORT, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("And It Don't Stop", [
                new Quest("The ${Quest.PLAYER1} is suddenly challenged to a rap off by a particularly Fresh ${Quest.CONSORT}. It's a close one, but the ${Quest.PLAYER1} emerges victorious. It helps that the Fresh ${Quest.CONSORT} kept rhyming ${Quest.CONSORTSOUND} with ${Quest.CONSORTSOUND}."),
                new Quest("The ${Quest.PLAYER1} has apparently gotten a reputation as a rap master. A series of ${Quest.CONSORT}s challenge them to rap offs and get utterly destroyed by the ${Quest.PLAYER1}'s fresh flows. "),
                new Quest("The final challenger, a Sick-Nasty ${Quest.CONSORT} approaches the ${Quest.PLAYER1}. And aura of ${Quest.MCGUFFIN} and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty ${Quest.CONSORT} falters, and misses a beat. The ${Quest.PLAYER1} wins! They are the best rapper in all of Paradox Space! "),
            ],new ItemReward(items), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);
    }

}