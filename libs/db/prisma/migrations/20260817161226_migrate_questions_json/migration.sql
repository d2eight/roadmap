-- This is an empty migration.
UPDATE "Guide"
SET "questions" =
        ("questions" - 'aiQuestionABCDSchema')
            || jsonb_build_object(
                'aiQuestionABCD',
                "questions"->'aiQuestionABCDSchema'
               )
WHERE "questions" ? 'aiQuestionABCDSchema';
