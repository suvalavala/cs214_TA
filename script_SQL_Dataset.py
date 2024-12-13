import random

def generate_and_save_synthetic_data_sql(num_objects, num_rankings, filename="ranked_data.sql"):
    """Generates synthetic ranking data and saves it to an SQL file."""
    with open(filename, mode='w') as file:
        # Create the table structure in the SQL file
        file.write("USE ranking_db;\n") 
        file.write("\n\n")

        # Write INSERT statements
        for rank_source in range(num_rankings):
            insert_statement = "INSERT INTO rankings (object_id, rank_source, score) VALUES\n"
            values = []
            # Generate (object_id, score) pairs with random scores
            for obj_id in range(1, num_objects + 1):
                score = random.uniform(0.0, 1.0)
                values.append(f"({obj_id}, {rank_source}, {score:.4f})")
            # Join all values into one INSERT statement per rank_source
            insert_statement += ",\n".join(values) + ";\n"
            file.write(insert_statement)

# Generate a .sql file with 1000 objects and 5 rankings
generate_and_save_synthetic_data_sql(num_objects=10000, num_rankings=20, filename="ranked_data.sql")

