import supabase from '@/app/supabaseClient';

export async function GET() {
  // Specify the name of the table you want to retrieve data from
  const tableName = 'DIM_SUM_MENU_ITEMS';

  // Use the Supabase client to query the table and retrieve all rows
  const { data, error } = await supabase.from(tableName).select('*');

  // If there was an error retrieving the data, return an error response
  if (error) {
    return new Response(`Error retrieving data: ${error.message}`, {
      status: 500
    });
  }

  // Otherwise, return the data as a JSON array
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
